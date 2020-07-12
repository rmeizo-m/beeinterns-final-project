import React from 'react';

import { accountService } from '@/_services';

function Home() {
    const user = accountService.userValue;

    return (
        <div className="p-4">
            <div className="container">
                <h1> Здравствуйте {user.firstName}!</h1>
                <p>Поздравляем! Вы зачислены в Высшую Школу React BeeInterns !!!</p>
            </div>
        </div>
    );
}

export { Home };
