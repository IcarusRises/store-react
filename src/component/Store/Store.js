import React, {Fragment} from 'react';
import Sidebar from '../../container/Sidebar/Sidebar';
import CardGenerator  from '../../container/CardGenerator/CardGenerator';
import Carousel from '../Carousel/Carousel';
import image1 from '../../assets/slider/placeholder.png';
import styles from './Store.module.css';

const store = () => (
    <Fragment>
        <div className={styles.Store_Empty_Area_E}>

        </div>
        <Sidebar/>
        <Carousel
            boolean={false} 
            mainImage={image1}
            secondImage={image1}
            thirdImage={image1}
        />
        <div className={styles.Store_Empty_Area_C}>

        </div>
        <div className={styles.Store_Container}>
            <div className={styles.Store_Laptops_Title}>
                <p>Laptops</p>
            </div>
            <div className={`${styles.Store} ${styles.Store_Border_Bottom}`}>
                <CardGenerator/>
            </div>
        </div>
    </Fragment>
)


export default store;