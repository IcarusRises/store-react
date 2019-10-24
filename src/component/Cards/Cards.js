import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Cards.module.css'


const cards = (props) => (
    <div className={`${styles.Card_Border_Right} ${styles.Card_Margins}`}>
        <Link to={"/laptops/" + props.id} className={styles.Card}>
            <p className={styles.Header}>
                    {props.brand}
            </p>
            <div className={styles.Image}>
                <img src={props.image} alt={`${props.brand}_${props.name}`}/>
            </div>
            <p className={styles.Name}>
                {props.name}
            </p>
            <div className={styles.Card_Flex_Container}>
                <div className={styles.Infobox}>
                    <p className={styles.Original}>
                        ${props.original}
                    </p>
                    <p className={styles.Price}>
                        ${props.price}
                    </p>
                </div>
                <div className={styles.Card_Infobox_Button_Container}>
                    <Link to={"/laptops/purchase/" + props.id}>
                        <button className={styles.Card_Infobox_Button}>
                            Purchase
                        </button>
                    </Link>
                </div>
            </div>
        </Link>        
    </div>
);

export default cards;