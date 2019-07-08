import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import styles from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/cart'>Cart</NavigationItem>
    </ul>
)

export default navigationItems;