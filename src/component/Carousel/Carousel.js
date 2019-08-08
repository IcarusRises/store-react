import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';

const carousel = (props) => (
    <div className={styles.Container}>
        <Carousel showThumbs={props.boolean} useKeyboardArrows>
            <div>
                <img src={props.mainImage}alt='1'/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={props.secondImage} alt='1'/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={props.thirdImage} alt='1'/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </div>
)

export default carousel;