export const ActionType = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  MAINTENANCE: 'MAINTENANCE',
};

const user = (
  state = {
    accessToken: null,
    isLoggedIn: false,
    profile: null,
  },
  { type, data },
) => {
  switch (type) {
    case ActionType.USER_LOGIN:
      return { ...state, ...data };
    case ActionType.MAINTENANCE:
      return { ...state, isMaintenance: true };
    case ActionType.USER_LOGOUT:
      return {
        ...state,
        accessToken: null,
        isLoggedIn: false,
        profile: null,
      };
    default:
      return state;
  }
};

export default user;
