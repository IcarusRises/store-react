import React from 'react';
import styles from './Cards.module.css'

const cards = (props) => (
    <div className={styles.Card}>
        <div className={styles.Image}>
            <img className={styles.CardImage} src={props.image} alt="test image"/>
        </div>
        <div>
            <p className={styles.Header}>
                {props.name}
            </p>
            <p className={styles.Price}>
                {props.price}
            </p>
        </div>
        <button className={styles.Cart}>
                Add to Cart
        </button>
    </div>
);

export default cards;