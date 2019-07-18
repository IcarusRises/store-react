import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Carousel from '../Carousel/Carousel';
import styles from './Background.module.css';

const background = () => (
    <div className={styles.Background}>
        <Sidebar/>
        <Carousel/>
    </div>
)

export default background;