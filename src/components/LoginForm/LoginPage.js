import React from 'react';
import {useHistory} from 'react-router-dom';
import './LoginForm.scss';


export default function LoginForm(){
    const history = useHistory();
    return(
        <form id="dataForm" class="form-content" onSubmit={() => history.push('/')}>
            <h1 class="form-name">BeeInterns</h1>
            <input class="input-form" name="name" placeholder="Логин"/>
            <input class="input-form" type="password" name="city" placeholder="Пароль"/>
            <button type="submit" class="input-button">Вход</button>
        </form>
    );
}