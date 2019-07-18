import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import styles from './Sidebar.module.css';

const sidebar = () => (
    <ul className={styles.Sidebar}>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='#'>Test</NavigationItem>
        <NavigationItem link='#'>Test</NavigationItem>
        <NavigationItem link='#'>Test</NavigationItem>
    </ul>
);


export default sidebar;