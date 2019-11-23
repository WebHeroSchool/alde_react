import React from 'react';
import style from './Repos.module.css';

const Repos = ({ name, link, lang, create, update }) => {
  return (
    <a href={link} className={style.wrap} target='_blank' rel='noopener noreferrer'>
      <h3 className={style.name}>{name}</h3>
      <div className={style.desc}>
        <p className={style.desc__text}>{lang}</p>
        <p className={style.desc__text}>create: {new Date(create).toLocaleDateString()}</p>
        <p className={style.desc__text}>update: {new Date(update).toLocaleDateString()}</p>
      </div>
    </a>
  );
}

export default Repos;