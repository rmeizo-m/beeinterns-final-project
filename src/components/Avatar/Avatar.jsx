import React from 'react';

const Avata = (props) => {
  if (!props.avatar) {
    return (
      <div className="user-img">
        <img src="" alt="" />
      </div>
    );
  } else {
    return (
      <div className="user-img">
        <img src={props.img} alt="" />
      </div>
    );
  }
};

export default Avata;
