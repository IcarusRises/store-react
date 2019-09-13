import React from 'react';
import {Link} from 'react-router-dom';
import pcLogo from '../../assets/logo/logo.png';
import styles from './Logo.module.css';

const logo = () => (
    <div className={styles.Logo}>
        <Link to='/'>
            <img src={pcLogo} alt="Pc Logo"/>
        </Link>
    </div>
)

export default logo;