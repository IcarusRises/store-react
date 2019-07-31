import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import CreateLaptop from '../../../container/Form/CreateLaptop';



import styles from './NavigationItems.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const navigationItems = () => (
    <Router>
        <ul className={styles.NavigationItems}>
            <NavigationItem link='/create'><FontAwesomeIcon icon="plus" /></NavigationItem>
            <NavigationItem link='/'><FontAwesomeIcon icon="minus" /></NavigationItem>
            <NavigationItem link='/cart'><FontAwesomeIcon icon="shopping-cart" /></NavigationItem>
        </ul>

        <Route path="/create" component={CreateLaptop}/> 
    </Router>
    
)

export default navigationItems;