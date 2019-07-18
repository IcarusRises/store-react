import React from 'react';

import pcLogo from '../../assets/logo/pclogo.png';

import styles from './Logo.module.css';

const logo = () => (
    <div className={styles.Logo}>
        <img src={pcLogo} alt="Pc Logo"/>
    </div>
)

export default logo;