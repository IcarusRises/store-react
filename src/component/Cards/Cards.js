import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Cards.module.css'


const cards = (props) => (
    <div className={styles.Card}>
        <Link to={"/laptops/" + props.id} className={styles.Card}>
            <div className={styles.Image}>
                <img className={styles.CardImage} src={props.image} alt="test image"/>
            </div>
            <div>
                <p className={styles.Header}>
                    {props.brand}
                </p>
                <p>
                    {props.name}
                </p>
                <p>
                    {props.original}
                </p>
                <p>
                    {props.savings}
                </p>
                <p>
                    {props.price}
                </p>
                
                <p className={styles.Price}>
                    {props.price}
                </p>
            </div>
        </Link>        
        <button className={styles.Cart}>
                Add to Cart
        </button>
    </div>
);

export default cards;