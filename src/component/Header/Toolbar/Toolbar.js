import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Searchbar from '../../../container/Searchbar/Searchbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './Toolbar.module.css';

const toolbar = () => (
    <header className={styles.Toolbar_Container}>
        <nav className={styles.Toolbar}>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <div>
                <Searchbar/>
            </div>
            <div>
                <NavigationItem link='/cart'><FontAwesomeIcon className={styles.Cart_Icon} icon="shopping-cart" /></NavigationItem>
            </div>
        </nav>
    </header>
)

export default toolbar;