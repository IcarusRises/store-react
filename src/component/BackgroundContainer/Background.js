import React from 'react';

import Sidebar from '../Sidebar/Sidebar';
import Carousel from '../Carousel/Carousel';
import styles from './Background.module.css';

const background = () => (
    <div className={styles.Background}>
        <Sidebar/>
        <Carousel 
            boolean={false} 
            mainImage={'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2018/09/image2-27-840x430.png'}
            secondImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSoDWsQasjT6229m_l-fkW72AjIWImYFfr7wK73TLa6wmKMBC'}
            thirdImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSoDWsQasjT6229m_l-fkW72AjIWImYFfr7wK73TLa6wmKMBC'}/>
    </div>
)

export default background;