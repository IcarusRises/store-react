import React from 'react'
import {Link} from 'react-router-dom';

import styles from './BreadCrumbs.module.css';

const breadCrumbs = (props) => (
    <ul className={styles.breadCrumbs}>
        {props.links.map(({to, label}) => 
            <li><Link to={to}>{label}</Link></li>    
        )}
    </ul>
)

export default breadCrumbs
