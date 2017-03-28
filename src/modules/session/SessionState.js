import {Map} from 'immutable';
import {getUserProfile} from '../../utils/userProfile';

export const RESET_STATE = 'SessionState/RESET';
export const INITIALIZE_STATE = 'SessionState/INITIALIZE';
export const SET_TOKEN = 'SessionState/SET_TOKEN';
export const CLEAR_TOKEN = 'SessionState/CLEAR_TOKEN';
// Initial state
const initialState = Map({isReady: false, token: ''});

export function resetSessionStateFromSnapshot(state) {
  return {type: RESET_STATE, payload: state};
}

export function initializeSessionState() {
  return {type: INITIALIZE_STATE};
}

export function setToken(token, username){
  return {type: SET_TOKEN, token, username};
}

export function clearToken(){
  return {type: CLEAR_TOKEN};
}

// Reducer
export default function SessionStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_STATE:
    case RESET_STATE:
      return state
        .set('isReady', true);

    case SET_TOKEN:
    {
      return state
        .set('token', action.token)
        .set('username', action.username);
    }

    case CLEAR_TOKEN:
      return state
        .set('token', '')
        .set('username', '');

    default:
      return state;
  }
}
