import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import * as Types from './config/types';

const authorizationDefaultState = {
  loggedIn: false,
  access_token: null
};

const authorization = (state = authorizationDefaultState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return Object.assign({}, state, { loggedIn: true });
    case Types.SAVE_INSTAGRAM_TOKEN:
      return Object.assign({}, state, { access_token: action.access_token });
    default:
      return state;
  }
};

const userProfileDefaultState = {

};

const userProfile = (state = userProfileDefaultState, action) => {
  switch (action.type) {
    // case Types.SAVE_INSTAGRAM_TOKEN:
    //   return Object.assign({}, state, {
    //     id: action.data.id,
    //     username: action.data.username,
    //     full_name: action.data.full_name,
    //     profile_picture: action.data.profile_picture,
    //     access_token: action.data.access_token,
    //     like_tags: action.data.like_tags,
    //     be_like: action.data.be_like
    //   });
    default:
      return state;
  }
};

const reducer = combineReducers({
  authorization,
  userProfile,
  form: reduxFormReducer
});

export default reducer;