import React from 'react';
import style from './Profile.module.css';
import github from '../../images/github.svg';
import mail from '../../images/mail.svg';
import telegram from '../../images/telegram.svg';



const Profile = ({ avatar, login, url }) => {
  return (
    <div className={style.wrap}>
      <img src={avatar} alt='' className={style.avatar} />
      <div>
        <h3 className={style.name}>
          Алексей Денисов
        </h3>
        <a href={url} className={style.link} target='_blank'>
          <img src={github} alt='github' className={style.icon} />
          <span className={style.text}>{login}</span>
        </a>
        <a href='mailto:alde.owl.gmail.com' className={style.link}>
          <img src={mail} alt='github' className={style.icon} />
          <span className={style.text}>alde.owl@gmail.com</span>
        </a>
        <a href='#' className={style.link}>
          <img src={telegram} alt='github' className={style.icon} />
          <span className={style.text}>+7 983 304 02 07</span>
        </a>
      </div>
    </div>
  );
}

export default Profile;