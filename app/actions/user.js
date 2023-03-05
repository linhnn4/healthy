import { store } from 'reducers';
import { ActionType } from 'reducers/user';
import { COOKIE_NAME } from 'utils/constants';
import { healthyService } from 'services';
import cookie from 'react-cookies';

const login = async values => {
  const { user } = store.getState();
  if (user && user.isLoggedIn) {
    return user;
  }
  try {
    const result = await healthyService.login(values);
    if (result?.accessToken) {
      signIn({
        isLoggedIn: true,
        user: result,
        accessToken: result.accessToken,
      });
      cookie.save(COOKIE_NAME, {
        isLoggedIn: true,
        user: result,
        accessToken: result.accessToken,
      });
    }
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const signIn = data => {
  store.dispatch({
    type: ActionType.USER_LOGIN,
    data,
  });
};

const signOut = () => {
  cookie.remove(COOKIE_NAME);
  store.dispatch({
    type: ActionType.USER_LOGOUT,
  });
};

export const userAction = {
  login,
  signOut,
  signIn,
};
