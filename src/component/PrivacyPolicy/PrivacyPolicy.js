import React, {Fragment} from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import styles from './PrivacyPolicy.module.css';

const privacyPolicy = () => (
    <Fragment>
        <BreadCrumbs links={[
            {to: '/', label: 'Home'},
            {to:'/privacy', label: 'Privacy'},
        ]}/>
        <div className={styles.PrivacyPolicy_Area_A}>
            A
        </div>
        <div className={styles.PrivacyPolicy_Area_B}>
            <p className={styles.PrivacyPolicy_Title}>
                Privacy Policy
            </p>
            <p className={styles.PrivacyPolicy_Topic_Title}>
                Example Topic
            </p>
            <p className={styles.PrivacyPolicy_Topic_Blurb}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam numquam maxime, porro assumenda dolores rem maiores esse? Ipsam autem neque atque suscipit consequuntur maiores accusantium culpa iste est vero.
                Repellat aliquid temporibus vitae maxime modi nesciunt rerum suscipit facilis voluptate iusto facere voluptatibus dolores culpa officia, a veritatis voluptas cupiditate nisi optio deserunt! Non consequuntur explicabo esse quam sequi.
                Quas eius, corrupti tempora ratione, cumque labore officia soluta optio dolorum magnam aperiam alias mollitia quo vel molestiae minus, consequatur voluptas eaque expedita cupiditate eos nulla obcaecati! Officia, mollitia eum.
            </p>

            <p className={styles.PrivacyPolicy_Topic_Blurb}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente soluta dolorum similique voluptatem excepturi laborum, corrupti commodi, quod optio enim amet! Omnis quos, vitae doloribus deserunt explicabo voluptatibus! Dicta, nulla.
                Quo ex fuga nam vitae itaque doloribus, quis pariatur eaque quas, voluptate error illum non animi mollitia quisquam ipsam voluptatum omnis autem esse praesentium similique. Necessitatibus amet incidunt esse culpa?
                Officia sed in vitae, culpa placeat, necessitatibus doloremque debitis perferendis adipisci accusamus nostrum quas voluptatem aspernatur quia neque cupiditate! Facere necessitatibus eligendi veniam nemo natus qui ad. Dolores, accusamus exercitationem.
                Nemo incidunt illo, facere sunt iste dolorum hic nam porro excepturi qui, saepe assumenda vero, tempore officiis minima. Sapiente dolore eos assumenda dolorum dicta quas eius nobis temporibus vel eligendi.
            </p>
            <p className={styles.PrivacyPolicy_Topic_Title}>
                Example Topic
            </p>
            <p className={styles.PrivacyPolicy_Topic_Blurb}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam numquam maxime, porro assumenda dolores rem maiores esse? Ipsam autem neque atque suscipit consequuntur maiores accusantium culpa iste est vero.
                Repellat aliquid temporibus vitae maxime modi nesciunt rerum suscipit facilis voluptate iusto facere voluptatibus dolores culpa officia, a veritatis voluptas cupiditate nisi optio deserunt! Non consequuntur explicabo esse quam sequi.
                Quas eius, corrupti tempora ratione, cumque labore officia soluta optio dolorum magnam aperiam alias mollitia quo vel molestiae minus, consequatur voluptas eaque expedita cupiditate eos nulla obcaecati! Officia, mollitia eum.
            </p>
            <p className={styles.PrivacyPolicy_Topic_Title}>
                Example Topic
            </p>
            <p className={styles.PrivacyPolicy_Topic_Blurb}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam numquam maxime, porro assumenda dolores rem maiores esse? Ipsam autem neque atque suscipit consequuntur maiores accusantium culpa iste est vero.
                Repellat aliquid temporibus vitae maxime modi nesciunt rerum suscipit facilis voluptate iusto facere voluptatibus dolores culpa officia, a veritatis voluptas cupiditate nisi optio deserunt! Non consequuntur explicabo esse quam sequi.
                Quas eius, corrupti tempora ratione, cumque labore officia soluta optio dolorum magnam aperiam alias mollitia quo vel molestiae minus, consequatur voluptas eaque expedita cupiditate eos nulla obcaecati! Officia, mollitia eum.
            </p>
            <ul>
               <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam eos similique in accusamus illum distinctio ratione quod? Incidunt enim ipsa perspiciatis magni sequi minima fugit, vel eos, blanditiis autem veritatis!</li>
               <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, beatae tempora, eos, quas temporibus quam molestiae vero perferendis voluptatibus fugit a repudiandae hic nemo numquam. Suscipit pariatur non obcaecati distinctio!Totam enim accusantium, similique id dolor excepturi veniam natus doloremque tempora cumque adipisci numquam, dolorem minus rerum magnam obcaecati ducimus quibusdam ut sit nostrum non earum provident sunt expedita. Necessitatibus.</li>
               <li>Dolar  consectetur adipisicing elit. Consequuntur, beatae tempora,</li>
               <li> consectetur adipisicing elit. Consequuntur, beatae tempora, consectetur adipisicing elit. Consequuntur, beatae tempora, consectetur adipisicing elit. Consequuntur, beatae tempora,</li>
            </ul>
            <p className={styles.PrivacyPolicy_Topic_Title}>
                Example Topic
            </p>
            <p className={styles.PrivacyPolicy_Topic_Blurb}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam numquam maxime, porro assumenda dolores rem maiores esse? Ipsam autem neque atque suscipit consequuntur maiores accusantium culpa iste est vero.
                Repellat aliquid temporibus vitae maxime modi nesciunt rerum suscipit facilis voluptate iusto facere voluptatibus dolores culpa officia, a veritatis voluptas cupiditate nisi optio deserunt! Non consequuntur explicabo esse quam sequi.
                Quas eius, corrupti tempora ratione, cumque labore officia soluta optio dolorum magnam aperiam alias mollitia quo vel molestiae minus, consequatur voluptas eaque expedita cupiditate eos nulla obcaecati! Officia, mollitia eum.
            </p>
        </div>
        <div className={styles.PrivacyPolicy_Area_C}>
            C
        </div>
        <div className={`${styles.PrivacyPolicy_Area_D} ${styles.PrivacyPolicy_Update}`}>
            <p>Updated on 0/0/0</p>
        </div>
    </Fragment>
);

export default privacyPolicy;