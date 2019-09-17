import React from 'react';
import NavigationItem from '../../NavigationItems/NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems_List}>
        <li>{props.name}</li>
        <NavigationItem link='#'>About Us</NavigationItem>
        <NavigationItem link='/contact'>Contact Us</NavigationItem>
        <NavigationItem link='#'>Privacy Policy</NavigationItem>
        <NavigationItem link='#'>Terms and Conditions</NavigationItem>
    </ul>
)

export default navigationItems;