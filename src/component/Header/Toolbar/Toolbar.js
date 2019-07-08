import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Searchbar from '../Searchbar/Searchbar';

import styles from './Toolbar.module.css';

const toolbar = () => (
    <header className={styles.Toolbar}>
        <div>
            <Logo/>
        </div>
        <div>
            <NavigationItems/>
        </div>
        <div>
            <Searchbar/>
        </div>
    </header>
)

export default toolbar;