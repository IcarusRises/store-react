import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='Contact'>Contact Us</NavigationItem>
    </ul>
)

export default navigationItems;