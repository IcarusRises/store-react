import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Searchbar from '../Searchbar/Searchbar';

import styles from './Toolbar.module.css';

const toolbar = () => (
    <header>
        <nav className={styles.Toolbar}>
            <div>
                <Logo/>
            </div>
            <div>
                <Searchbar/>
            </div>
            <div>
                <NavigationItems/>
            </div>
        </nav>
    </header>
)

export default toolbar;