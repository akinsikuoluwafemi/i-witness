import { SIGN_IN, SIGN_OUT, GET_LOCATION } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    location: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload  };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        case GET_LOCATION:
            return { ...state, location: action.payload };
        default:
            return state;
    }
};