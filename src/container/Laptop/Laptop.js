import React, {Component} from 'react';
import Axios from 'axios';

import Carousel from '../../component/Carousel/Carousel'
import TabsNav from '../../component/Tabs/TabsNav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './Laptop.module.css';

class Laptop extends Component{

    state = {
        laptop: {}
    }

    componentDidMount(){
        Axios.get('http://localhost:3001/laptops/' + this.props.match.params.id)
        .then(res => {
            let laptop = res.data;
            this.setState({
                laptop: laptop
            })
        })
        .catch(err => console.log('Error: ' + err))
    }

    render(){
        console.log(this.state.laptop)
        return(
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.carousel}>
                            <Carousel
                                boolean={true}
                                width='500px'
                                mainImage={this.state.laptop.image}
                                secondImage={this.state.laptop.image}
                                thirdImage={this.state.laptop.image}/>
                        </div>
                    </div>
                    <div className={`${styles.column} ${styles.laptop}`}>
                        <p>
                            {this.state.laptop.brand}
                        </p>
                        <p>
                            {this.state.laptop.name}
                        </p>
                    </div>
                    <div className={`${styles.column} ${styles.box}`}>
                        <p className={styles.box_sold}>Sold and Shipped By: <span>Linh Cell</span></p>
                        <ul className={styles.box_list}>
                            <li className={styles.box_price}>
                                ${this.state.laptop.price}
                            </li>
                            <li className={styles.box_savings}>
                                Save {this.state.laptop.savings}
                            </li>
                            <li className={styles.box_original}>
                                original <span>${this.state.laptop.original}</span>
                            </li>
                        </ul>
                        <div className={styles.box_buttons_container}>
                            <div>
                                <button className={`${styles.button_pointer} ${styles.box_buttons_inline} ${styles.number_button_subtract}`}>
                                    <FontAwesomeIcon icon="minus" />
                                </button>
                                <div className={styles.box_buttons_inline}>
                                    <input type="number" className={styles.number}/>
                                </div>
                                <button className={`${styles.button_pointer} ${styles.box_buttons_inline} ${styles.number_button_add}`}>
                                    <FontAwesomeIcon icon="plus" />
                                </button>
                                <button className={`${styles.button_pointer} ${styles.button_cart} ${styles.box_buttons_inline}`}>
                                    <FontAwesomeIcon icon="shopping-cart"/> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <TabsNav/>
                    </div>
                </div>
            </div>
        );
    };
};

export default Laptop;