import {
    Map
} from 'immutable';
import {
    loop,
    Effects
} from 'redux-loop';
import {
    findMessages,
    delMessages
} from '../../services/messageService';

// Initial state
const initialState = Map({
    loading: false,
    messages: [],
    error: ''
});

// Actions
const REQUEST_MESSAGES = 'MessagesState/REQUEST_MESSAGES';
const REQUEST_DELETE_MESSAGES = 'MessagesState/REQUEST_DELETE_MESSAGES';
const REQUEST_FAILURE = 'MessagesState/REQUEST_FAILURE';
const LOAD_MESSAGES_SUCCESS = 'MessagesState/LOAD_MESSAGES_SUCCESS';
const DELETE_MESSAGES_SUCCESS = 'MessagesState/DELETE_MESSAGES_SUCCESS';

// Action creators

export function loadMessages(to) {
    return {
        type: REQUEST_MESSAGES,
        to
    };
}

export function deleteMessages(ids) {
    return {
        type: REQUEST_DELETE_MESSAGES,
        ids
    };
}

export async function requestMessages(to) {
    try {
        let messages = await findMessages(to);
        if (typeof messages === 'string') {
            messages = JSON.parse(messages);
        } else {
            messages = JSON.parse(JSON.stringify(messages));
        }
        return {
            type: LOAD_MESSAGES_SUCCESS,
            payload: messages
        };
    } catch (error) {
        console.log(error.message);
        return {
            type: REQUEST_FAILURE,
            payload: error.message
        };
    }
}

export async function requestDeleteMessages(ids) {
    try {
        const result = await delMessages(ids);
        return {
            type: DELETE_MESSAGES_SUCCESS
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
export default function MessagesStateReducer(state = initialState, action = {}) {
    switch (action.type) {

        case REQUEST_MESSAGES:
            {
                return loop(state.set('loading', true), Effects.promise(requestMessages, action.to));
            }

        case REQUEST_DELETE_MESSAGES:
            {
                return loop(state.set('loading', true), Effects.promise(requestDeleteMessages, action.ids));
            }

        case LOAD_MESSAGES_SUCCESS:
            {
                return state
                    .set('loading', false)
                    .set('messages', [
                        ...action.payload
                    ]);
            }
        case DELETE_MESSAGES_SUCCESS:
            {
                return state.set('loading', false);
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