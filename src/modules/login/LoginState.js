import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {getAuthentication} from '../../services/authenticationService';
import {setAuthenticationToken} from '../../utils/authentication';
import {setUserProfile} from '../../utils/userProfile';

// Initial state
const initialState = Map({loading: false, auth: {}, error: ''});

// Actions
const REQUEST_AUTHENTICATION = 'LoginState/REQUEST_AUTHENTICATION';
const SET_TOKEN_AND_USER_INFO = 'LoginState/SET_TOKEN_AND_USER_INFO';
const REQUEST_FAILURE = 'LoginState/REQUEST_FAILURE';

// Action creators
export function login(username, password, signIn) {       
    return {type: REQUEST_AUTHENTICATION, username, password, signIn};
}

export async function requestAuthentication(username, password, signIn) {
    try {   
        let auth = await getAuthentication(username, password);
        if (typeof auth === 'string') {
            auth = JSON.parse(auth);
        } else {
            auth = JSON.parse(JSON.stringify(auth));
        }
        signIn(auth, username);
        return {type: SET_TOKEN_AND_USER_INFO, payload: auth};
    } catch (error) {
        return {type: REQUEST_FAILURE, payload: error.message};
    }
}

// Reducer
export default function HomeStateReducer(state = initialState, action = {}) {
    switch (action.type) {

        case REQUEST_AUTHENTICATION:
            {
                return loop(state.set('loading', true), Effects.promise(requestAuthentication, action.username, action.password, action.signIn));
            }
        case SET_TOKEN_AND_USER_INFO:
            {
                setAuthenticationToken(action.payload.Token);
                setUserProfile(action.payload);
                return state
                    .set('loading', false)
                    .set('auth', {
                        ...action.payload
                    });
            }

        case REQUEST_FAILURE:
            {
                return state
                    .set('loading', false)
                    .set('error', action.payload);
            }

        default:
            {
                return state;
            }
    }
}
