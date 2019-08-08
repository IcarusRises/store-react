import React from 'react';

import NavigationItem from '../../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul>
        <li>{props.name}</li>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/contact'>Contact Us</NavigationItem>
    </ul>
)

export default navigationItems;