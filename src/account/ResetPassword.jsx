import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';

function ResetPassword({ history }) {
    const TokenStatus = {
        Validating: 'Validating',
        Valid: 'Valid',
        Invalid: 'Invalid'
    }

    const [token, setToken] = useState(null);
    const [tokenStatus, setTokenStatus] = useState(TokenStatus.Validating);

    useEffect(() => {
        const { token } = queryString.parse(location.search);

        // remove token from url to prevent http referer leakage
        history.replace(location.pathname);

        accountService.validateResetToken(token)
            .then(() => {
                setToken(token);
                setTokenStatus(TokenStatus.Valid);
            })
            .catch(() => {
                setTokenStatus(TokenStatus.Invalid);
            });
    }, []);

    function getForm() {
        const initialValues = {
            password: '',
            confirmPassword: ''
        };

        const validationSchema = Yup.object().shape({
            password: Yup.string()
                .min(6, 'Пароль должен содержать не менее 6 символов')
                .required('Необходим пароль'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
                .required('Подтвердите пароль'),
        });

        function onSubmit({ password, confirmPassword }, { setSubmitting }) {
            alertService.clear();
            accountService.resetPassword({ token, password, confirmPassword })
                .then(() => {
                    alertService.success('Сброс пароля выполнен успешно, теперь вы можете войти', { keepAfterRouteChange: true });
                    history.push('login');
                })
                .catch(error => {
                    setSubmitting(false);
                    alertService.error(error);
                });
        }

        return (
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label>Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>Подтвердите Пароль</label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Сброс пароля
                                </button>
                                <Link to="/login" className="btn btn-link">Отмена</Link>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }

    function getBody() {
        switch (tokenStatus) {
            case TokenStatus.Valid:
                return getForm();
            case TokenStatus.Invalid:
                return <div>Проверка токена не удалась, если токен истек, вы можете получить новый по ссылке <Link to="forgot-password">Забыли пароль</Link> .</div>;
            case TokenStatus.Validating:
                return <div>Проверка токена...</div>;
        }
    }

    return (
        <div>
            <h3 className="card-header">Reset Password</h3>
            <div className="card-body">{getBody()}</div>
        </div>
    )
}

export { ResetPassword };
