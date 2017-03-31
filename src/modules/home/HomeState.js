import {
    Map
} from 'immutable';
import {
    loop,
    Effects
} from 'redux-loop';
import {
    getProfile
} from '../../services/profileService';

// Initial state
const initialState = Map({
    loading: false,
    infos: {}
});
// Actions
const REQUEST_HOME_INFO = 'HomeState/REQUEST_HOME_INFO';
const SET_INFO = 'HomeState/SET_INFO';
const REQUEST_FAILURE = 'HomeState/REQUEST_FAILURE';

// Action creators
export function initHomeInfo(username) {
    return {
        type: REQUEST_HOME_INFO,
        username
    };
}

export async function requestHomeInfos(username) {
    try {
        //TODO: connect server to retrieve data
        let profile = await getProfile(username);
        if (typeof profile === 'string') {
            profile = JSON.parse(profile);
        } else {
            profile = JSON.parse(JSON.stringify(profile));
        }
        return {
            type: SET_INFO,
            payload: {
                'profile': profile
            }
        };
    } catch (error) {
        console.log(error.message);
        return {
            type: REQUEST_FAILURE,
            payload: error.message
        };
    }
}

// Reducer
export default function HomeStateReducer(state = initialState, action = {}) {
    switch (action.type) {

        case REQUEST_HOME_INFO:
            return loop(state.set('loading', true), Effects.promise(requestHomeInfos, action.username));

        case SET_INFO:
            {
                return state
                    .set('loading', false)
                    .set('infos', {
                        ...action.payload
                    });
            }

        case REQUEST_FAILURE:
            return state
                .set('loading', false)
                .set('error', action.payload);

        default:
            return state;
    }
}