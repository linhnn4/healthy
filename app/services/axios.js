import { notification } from 'antd';
import { ActionType } from 'reducers/user';
import { COOKIE_NAME, API_URL } from 'utils/constants';
import { store } from 'reducers';
import { stringify } from 'query-string';
import axios from 'axios';
import cookie from 'react-cookies';

const DEFAULT_ERROR = 'Something went wrong. Please try again!';

const onError = ({ response }) => {
  if (response) {
    const { status, data, statusText } = response;
    if (status === 0) {
      store.dispatch({
        type: ActionType.MAINTENANCE,
      });
    } else if (status === 401) {
      cookie.remove(COOKIE_NAME);
      store.dispatch({
        type: ActionType.USER_LOGOUT,
      });
    } else if (status < 500) {
      notification.error({
        key: 'axios',
        message: data?.message || data?.errors?.message || DEFAULT_ERROR,
      });
    } else {
      notification.error({
        key: 'axios',
        message: `${status} - ${statusText ||
          data?.message ||
          data?.errors?.message} || ${DEFAULT_ERROR}`,
      });
    }
  } else {
    notification.error({ key: 'axios', message: 'Cannot connect to Server' });
  }
  return Promise.reject(response);
};

const beforeRequest = config => {
  const { accessToken } = store.getState().user;
  if (accessToken) {
    Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` });
  }
  if (config.data instanceof FormData) {
    Object.assign(config.headers, { 'Content-Type': 'multipart/form-data' });
  }
  return config;
};

const client = axios.create({
  baseURL: API_URL,
  paramsSerializer: params => stringify(params, { arrayFormat: '' }),
});
client.interceptors.request.use(beforeRequest);

// eslint-disable-next-line no-shadow
[client].forEach(client => {
  client.interceptors.response.use(({ data: response }) => response, onError);
});

export { client };
