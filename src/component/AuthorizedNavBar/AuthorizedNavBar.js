import React from 'react';
import {connect} from 'react-redux';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import {signOut} from '../../store/actions/authentication';
import styles from './AuthorizedNavBar.module.css';

const authorizedNavBar = (props) => {
    const {signOut} = props;
    return(
        <div>
            <ul className={styles.authorized_nav}>
                <NavigationItem link='/add'>Add</NavigationItem>
                <NavigationItem link='/'>Delete</NavigationItem>
                <li><button onClick={signOut}>Sign Out</button></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(authorizedNavBar);