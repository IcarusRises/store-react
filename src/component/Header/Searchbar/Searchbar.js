import React from 'react';

import styles from './Searchbar.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const searchbar = () => (
    <div className={styles.Searchbar}>
        <form action="#">
            <input type="text" name="search" placeholder="Search Laptops and Deals"/>
            <button>
                <FontAwesomeIcon icon="search"/>
            </button>
        </form>
    </div>
)

export default searchbar;