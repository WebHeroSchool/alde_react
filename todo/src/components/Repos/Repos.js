import React from 'react';
import style from './Repos.module.css';

const Repos = ({ name, link }) => {
  return (
    <a href={link} className={style.wrap} target='_blank'>
      <h3 className={style.name}>{name}</h3>
    </a>
  );
}

export default Repos;