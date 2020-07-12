import React from 'react';
import { Link } from 'react-router-dom';

function Overview({ match }) {
    const { path } = match;

    return (
        <div>
            <h1>Админ</h1>
            <p>Этот раздел доступен только администраторам.</p>
            <p><Link to={`${path}/users`}>Управление пользователями</Link></p>
        </div>
    );
}

export { Overview };
