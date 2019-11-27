import React from 'react';
import style from './Profile.module.css';
import github from '../../images/github.svg';
import mail from '../../images/mail.svg';
import telegram from '../../images/telegram.svg';


const Profile = ({ avatar, login, url }) => {
  const fullName = 'Алексей Денисов';
  const email = 'alde.owl@gmail.com';
  const phone = '+7 983 304 02 07';
  return (
    <div className={style.wrap}>
      <img src={avatar} alt='' className={style.avatar} />
      <div>
        <h3 className={style.name}>
          {fullName}
        </h3>
        <a href={url} className={style.link} target='_blank' rel="noopener noreferrer">
          <img src={github} alt='github' className={style.icon} />
          <span className={style.text}>{login}</span>
        </a>
        <a href='mailto:alde.owl.gmail.com' className={style.link}>
          <img src={mail} alt='github' className={style.icon} />
          <span className={style.text}>{email}</span>
        </a>
        <a href='tel:+79833040207' className={style.link}>
          <img src={telegram} alt='github' className={style.icon} />
          <span className={style.text}>{phone}</span>
        </a>
      </div>
    </div>
  );
}

export default Profile;
