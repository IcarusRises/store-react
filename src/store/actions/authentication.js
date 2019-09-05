import * as actionTypes from './actionTypes';
import {fireAuth} from '../../Firebase/Firebase';

export const startListeningToAuthChanges = () => {
    return dispatch => {
        fireAuth.onAuthStateChanged(user => {
            if(user){
                dispatch({
                    type: actionTypes.FETCH_USER,
                    user: user,
                })
            } else {
                dispatch(signOut())
            }
        })
    }
}

export const signOut = () => {
    return dispatch => {
        fireAuth.signOut()
            .then(() => {
                dispatch({type: actionTypes.SIGN_OUT_SUCCESS})
            })
            .catch(err => {
                console.log(err)
            })
    }
}