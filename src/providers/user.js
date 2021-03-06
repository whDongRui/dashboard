import { getCookie, setCookie } from 'utils';
import { map } from 'lodash';

const ROLE_ADMIN = 'global_admin';
const ROLE_DEV = 'developer';
const ROLE_NORMAL = 'user';

export default class UserProvider {
  constructor() {
    this.role = getCookie('role');
    this.username = getCookie('username');
    this.user_id = getCookie('user_id');
    this.email = getCookie('email');
    this.changedRole = getCookie('changedRole');
    this.accessToken = getCookie('access_token');
  }

  isLoggedIn() {
    return Boolean(this.accessToken && this.user_id);
  }

  update(props = {}) {
    Object.assign(this, props);

    // save own props to cookie
    const expires_in = parseInt(getCookie('expires_in'));
    map(props, (v, k) => {
      setCookie(k, v, new Date(expires_in));
    });
  }

  get isAdmin() {
    return this.role === ROLE_ADMIN && this.username !== 'isv';
  }

  get isDev() {
    return (
      this.changedRole === ROLE_DEV
      || (this.role === ROLE_DEV && this.changedRole !== ROLE_NORMAL)
    );
  }

  get isNormal() {
    return this.changedRole === ROLE_NORMAL || this.role === ROLE_NORMAL;
  }

  // fixme: mock isv role
  get isISV() {
    return (
      this.changedRole !== ROLE_DEV
      && this.role === ROLE_ADMIN
      && this.username === 'isv'
    );
  }
}
