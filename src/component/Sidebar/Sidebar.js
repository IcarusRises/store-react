import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import styles from './Sidebar.module.css';

const sidebar = () => (
    <div className={styles.Sidebar_Container}>
        <ul className={styles.Sidebar}>
            <NavigationItem link='#'>Apple</NavigationItem>
            <NavigationItem link='#'>Asus</NavigationItem>
            <NavigationItem link='#'>Lenovo</NavigationItem>
            <NavigationItem link='#'>HP</NavigationItem>
            <NavigationItem link='#'>Dell</NavigationItem>
        </ul>
    </div>
);


export default sidebar;