import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './InformationBox.module.css';

const informationBox = (props) => (
    <div className={styles.Purchase_Info_Box_Container}>
        <div className={styles.Purchase_Info_Box}>
            <div className={styles.Purchase_Info_Box_Ribbon}>
                <div className={styles.Purchase_Info_Box_Title}>
                    <span className={styles.Purchase_Info_Box_Icon}><FontAwesomeIcon icon={props.icon} /></span>
                    <span className={styles.Purchase_Info_Box_Title_Inner}>
                        <p className={styles.Purchase_Info_Box_Paragraph}>
                            {props.firstTitle}
                        </p>
                        <p  className={styles.Purchase_Info_Box_Paragraph}>
                            {props.secondTitle}
                        </p>
                    </span>
                    
                </div>
                <div className={styles.Purchase_Info_Box_Fold}></div>
                <div>
                    <p className={styles.Purchase_Info_Box_Info}>
                        {props.info}
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default informationBox;