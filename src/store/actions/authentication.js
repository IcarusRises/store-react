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
                dispatch({
                    type: actionTypes.FETCH_USER,
                    user: null
                })
            }
        })
    }
}

export const signOut = () => {
    return dispatch => {
        fireAuth.signOut()
            .then(() => {
                console.log('Successfully Logged Off')
            })
            .catch(err => {
                console.log(err)
            })
    }
}