import React, {Fragment} from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import whoIAmImg from '../../assets/img/whoiam.png';
import styles from './AboutUs.module.css';

const aboutUs = () => (
    <Fragment>
        <BreadCrumbs links={[
            {to: '/', label: 'Home'},
            {to:'/aboutus', label: 'About Us'},
        ]}/>
        <div className={styles.AboutUs_Area_A}>
           A
        </div>
        <div className={`${styles.AboutUs_Area_B} ${styles.AboutUs_Image}`}>
            <img src={whoIAmImg} alt="Who I Am Profile Picture"/>
        </div>
        <div className={styles.AboutUs_Area_C}>
            <p className={styles.About_Us_Who_I_Am_Title}>
                Who I am
            </p>
            <div className={styles.About_Us_Who_I_Am_Blurb}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias perspiciatis voluptate culpa. Corrupti natus vitae, ad repellendus hic vel? Nobis dicta consequatur eligendi sint quaerat sed, iste blanditiis cupiditate?Nisi ipsa expedita molestiae blanditiis! Veritatis quod eaque amet laboriosam ab temporibus voluptatem recusandae, molestiae eveniet ex mollitia, officiis dolorum veniam aut. Enim quis illum aliquid possimus inventore fugiat repellendus!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias perspiciatis voluptate culpa. Corrupti natus vitae, ad repellendus hic vel? Nobis dicta consequatur eligendi sint quaerat sed, iste blanditiis cupiditate?Nisi ipsa expedita molestiae blanditiis! Veritatis quod eaque amet laboriosam ab temporibus voluptatem recusandae, molestiae eveniet ex mollitia, officiis dolorum veniam aut. Enim quis illum aliquid possimus inventore fugiat repellendus!
                </p>
            </div>
            <p className={styles.About_Us_Who_I_Am_Title}>
                What I do
            </p>
            <div className={styles.About_Us_Who_I_Am_Blurb}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias perspiciatis voluptate culpa. Corrupti natus vitae, ad repellendus hic vel? Nobis dicta consequatur eligendi sint quaerat sed, iste blanditiis cupiditate?Nisi ipsa expedita molestiae blanditiis! Veritatis quod eaque amet laboriosam ab temporibus voluptatem recusandae, molestiae eveniet ex mollitia, officiis dolorum veniam aut. Enim quis illum aliquid possimus inventore fugiat repellendus!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias perspiciatis voluptate culpa. Corrupti natus vitae, ad repellendus hic vel? Nobis dicta consequatur eligendi sint quaerat sed, iste blanditiis cupiditate?Nisi ipsa expedita molestiae blanditiis! Veritatis quod eaque amet laboriosam ab temporibus voluptatem recusandae, molestiae eveniet ex mollitia, officiis dolorum veniam aut. Enim quis illum aliquid possimus inventore fugiat repellendus!
                </p>
            </div>
        </div>
        <div className={styles.AboutUs_Area_D}>
            <p className={`${styles.About_Us_Who_I_Am_Title} ${styles.About_Us_Who_I_Am_Guarantee}`}>
                My Guarantee
            </p>
            <p className={`${styles.About_Us_Who_I_Am_Blurb_Guarantee}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam praesentium recusandae, quisquam exercitationem, veritatis voluptate necessitatibus voluptatum accusantium molestias animi vitae modi velit esse? Veniam fugiat impedit quos error.
                Doloremque in praesentium laborum. Officiis tempore saepe nesciunt deserunt vel? Officia doloribus nam sint! Ab odio atque modi. Illo cupiditate sit corporis, quisquam veniam placeat esse suscipit perspiciatis ducimus amet.
                Labore, culpa nostrum velit ut fugit ullam obcaecati nam, cum aperiam dignissimos temporibus neque blanditiis quia minus eaque vitae ducimus atque unde debitis expedita assumenda alias! Dicta similique quo corporis.
                Saepe esse dolores cum harum quaerat non, distinctio dignissimos voluptatum consequatur animi, eos fuga impedit dolore, suscipit reprehenderit nobis minima! Aliquam adipisci deleniti sequi necessitatibus expedita in, accusamus eos vero?
            </p>
        </div>
    </Fragment>
)

export default aboutUs;