import Immutable from 'immutable';

const NEW_PLAYER_DEFAULTS = Immutable.fromJS({
  displayHP: true,
  displayMP: true,
  displayItems: true,
  displayLog: true,
  gameRaces: []
});

const newPlayerTemplate = (state = NEW_PLAYER_DEFAULTS, action) => {
  switch(action.type) {
    case 'NEW_TEMPLATE_UPDATE':
      return state.merge(action.data);
    default:
      return state;
  }
  // switch (action.type) {
  //   case 'USER_LOGIN':
  //     Config.setAuthToken(action.data.authToken);
  //     return Object.assign({}, state, action.data, { isLoading: false, isAuthorized: true });
  //   case 'USER_LOGIN_PENDING':
  //     return { isLoading: true, errorMessage: null };
  //   case 'USER_UNAUTHORIZED':
  //     return { isLoading: false, errorMessage: 'Login & Password combination is invalid.' };
  //   case 'USER_SERVER_ERROR':
  //     return { isLoading: false, errorMessage: 'There was a server error. Please try again later.' };
  //   case 'USER_LOGOUT':
  //     Config.clear();
  //     return Object.assign({}, state, { isLoading: false, isAuthorized: false });
  //   default:
  //     return state;
  // }
};

export default newPlayerTemplate;
