import React, {Fragment} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Carousel from '../Carousel/Carousel';
import CardGenerator  from '../../container/CardGenerator/CardGenerator';

import styles from './Store.module.css';

const store = () => (
    <Fragment>
        <div className={styles.Store_Sidebar}>
            <Sidebar/>
        </div>
        <div className={styles.Store_Carousel}>
            <Carousel 
                boolean={false} 
                mainImage={'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2018/09/image2-27-840x430.png'}
                secondImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSoDWsQasjT6229m_l-fkW72AjIWImYFfr7wK73TLa6wmKMBC'}
                thirdImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSoDWsQasjT6229m_l-fkW72AjIWImYFfr7wK73TLa6wmKMBC'}
            />
        </div>
        <div className={styles.Store_Products}>
            <div className={styles.Store}>
                <CardGenerator/>
            </div>
        </div>
    </Fragment>
)


export default store;