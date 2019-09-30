import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';

const carousel = (props) => (
    <div className={styles.Carousel_Container}>
        <Carousel showThumbs={props.boolean} width={props.width} showStatus={false} showArrows={false} useKeyboardArrows>
            <div>
                <img src={props.mainImage}alt='1'/>
            </div>
            <div>
                <img src={props.secondImage} alt='1'/>
            </div>
            <div>
                <img src={props.thirdImage} alt='1'/>
            </div>
        </Carousel>
    </div>
)

export default carousel;