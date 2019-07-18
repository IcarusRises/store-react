import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';

const carousel = () => (
    <div className={styles.Container}>
        <Carousel showThumbs={false} useKeyboardArrows>
            <div>
                <img src='https://smartslider3.com/wp-content/uploads/2017/12/slidersucksogimage.png' alt='1'/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://smartslider3.com/wp-content/uploads/2017/12/slidersucksogimage.png" alt='1'/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://smartslider3.com/wp-content/uploads/2017/12/slidersucksogimage.png" alt='1'/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </div>
)

export default carousel;