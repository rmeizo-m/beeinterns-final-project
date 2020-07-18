import React from 'react';

const UserCard = () => (
  <div className="user-card">
    <div className="user-img"><img src="" alt="" /></div>
    <div className="user-info">
      <h3>Иванов Иван Петрович</h3>
      {/* Тут через мап будет парситься социальные сети */}
      <div className="user-contacts">
        <div className="user-social__img"><img src="" alt="" /></div>
        <span>https://github.com/KateKozlovtseva</span>
      </div>
      <div className="user-contacts">
        <div className="user-social__img"><img src="" alt="" /></div>
        <span>ko-cat@yandex.ru</span>
      </div>
      <div className="user-contacts">
        <div className="user-social__img"><img src="" alt="" /></div>
        <span>@ko-cat</span>
      </div>
    </div>
  </div>
);
export default UserCard;
