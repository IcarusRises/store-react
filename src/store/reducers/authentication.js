import * as actionTypes from '../actions/actionTypes';
import initialState from '../initialState';

const authenticated = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_USER: 
            return action.user || null;
        default: 
            return state;    
    }
};

export default authenticated;