import React from 'react';
import style from './Profile.module.css';



const Profile = ({ avatar, name, login }) => {
  return (
    <div className={style.wrap}>
      <img src={avatar} alt='' className={style.avatar} />
      <div className={style.info}>
        <h3 className={style.info__title}>
          Имя: <span className={style.info__text}>{name}</span>
        </h3>
        <h3 className={style.info__title}>
          Логин: <span className={style.info__text}>{login}</span>
        </h3>
      </div>
    </div>
  )

}

export default Profile;