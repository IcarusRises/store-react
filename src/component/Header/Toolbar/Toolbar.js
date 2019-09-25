import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import Searchbar from '../../../container/Searchbar/Searchbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './Toolbar.module.css';

const toolbar = () => (
    <header className={styles.Toolbar_Header}>
        <nav className={styles.Toolbar}>
            <div className={styles.Toolbar_Logo}>
                <Logo/>
            </div>
            <div>
                <Searchbar/>
            </div>
            <div>
                <NavigationItem link='/cart'><FontAwesomeIcon className={styles.ToolBar_Cart_Icon} icon="shopping-cart" /></NavigationItem>
            </div>
        </nav>
    </header>
)

export default toolbar;