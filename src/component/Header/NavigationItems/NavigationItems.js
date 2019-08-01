import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const navigationItems = () => (
        <ul className={styles.NavigationItems}>
            <NavigationItem link='/add'><FontAwesomeIcon icon="plus" /></NavigationItem>
            <NavigationItem link='/'><FontAwesomeIcon icon="minus" /></NavigationItem>
            <NavigationItem link='/cart'><FontAwesomeIcon icon="shopping-cart" /></NavigationItem>
        </ul>
    
)

export default navigationItems;