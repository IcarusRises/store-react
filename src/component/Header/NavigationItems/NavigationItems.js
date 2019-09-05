import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import NavigationItem from './NavigationItem/NavigationItem';
import {signOut} from '../../../store/actions/authentication';
import styles from './NavigationItems.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const navigationItems = (props) => {
    const {authenticated, signOut} = props;
    console.log(authenticated)
    const authOnlyLinks = (
        <Fragment>
            <NavigationItem link='/add'><FontAwesomeIcon icon="plus" /></NavigationItem>
            <NavigationItem link='/'><FontAwesomeIcon icon="minus" /></NavigationItem>
            <li><button onClick={signOut}>Sign Out</button></li>
        </Fragment>
    )
    const authVerified = authenticated.uid ?  authOnlyLinks : '';
    return(
        <ul className={styles.NavigationItems}>
             <NavigationItem link='/cart'><FontAwesomeIcon icon="shopping-cart" /></NavigationItem>
            {authVerified}
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(navigationItems);