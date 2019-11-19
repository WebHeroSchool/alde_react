import React, { Component } from 'react';
import Octokit from '@octokit/rest';
import style from './About.module.css';

import Profile from '../Profile/Profile';
import Repos from '../Repos/Repos';
import Loader from '../Loader/Loader';

// const octokit = new Octokit({ auth: 'ea4fb568ef16fc739105bd2e71610fd249083c21' });
const octokit = new Octokit();

export default class About extends Component {

  state = {
    loading: true,
    user: {},
    repList: [],
    error: false
  }
  componentDidMount() {
    octokit.repos.listForUser({ username: 'aldeowl' })
      .then(res => {
        if (res.data) {
          this.setState({ repList: res.data, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
      })
      .catch(e => this.setState({ error: true, loading: false }));

    octokit.users.getByUsername({ username: 'aldeowl' })
      .then(res => {
        if (res.data) {
          this.setState({ user: res.data });
        } else {
          this.setState({ error: true, loading: false });
        }
      })
      .catch(e => this.setState({ error: true, loading: false }));
  }

  render() {
    const { loading, error, repList, user } = this.state;
    if (loading) {
      return (
        <div className={style.wrap}>
          <Loader />
        </div>
      )
    }
    if (error) {
      return (
        <div className={style.wrap}>
          <p>Не удалось загрузить данные</p>
        </div>
      )
    }
    return <div className={style.wrap}>
      <Profile avatar={user.avatar_url} name={user.name} login={user.login} />
      {repList &&
        repList.map(item => (
          <Repos key={item.id} name={item.name} link={item.html_url} />
        ))}
    </div>;
  }
}
