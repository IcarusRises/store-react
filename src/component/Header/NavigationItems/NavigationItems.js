import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const navigationItems = () => {
    return(
        <ul className={styles.NavigationItems}>
             <NavigationItem link='/cart'><FontAwesomeIcon icon="shopping-cart" /></NavigationItem>
        </ul>
    )
}

export default navigationItems;