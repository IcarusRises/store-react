import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Carousel from '../../component/Carousel/Carousel';
import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import TabsNav from '../../component/Tabs/TabsNav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './Laptop.module.css';

class Laptop extends Component{

    state = {
        laptop: {}
    }

    componentDidMount(){
        axios.get('http://localhost:3001/laptops/' + this.props.match.params.id)
            .then(res => {
                let laptop = res.data;
                this.setState({
                    laptop: laptop
                })
            })
            .catch(err => console.log('Error: ' + err))
    }

    delete = () => {
        axios.delete('http://localhost:3001/laptops/' + this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render(
        links=[
            {to: '/', label: 'Home'},
            {to:'/laptops', label: 'Laptop'},
            {to:'/laptops/brand', label: 'Brand'},
            {to: `/laptops/brand/${this.state.laptop.brand}`, label: `${this.state.laptop.brand}`},
            {to: `/laptops/${this.props.match.params.id}`, label: `${this.state.laptop.name}`}
        ]
    ){
        console.log(this.state.laptop)
        const laptopButtons = (
            <div>
                <Link to={"edit/" + this.props.match.params.id}>Edit</Link>
                <button onClick={this.delete}>Delete</button>
            </div>
        )   

        const authVerified = this.props.authenticated.uid ?  laptopButtons : '';
        return(
            <Fragment>
                <BreadCrumbs links={links}/>
                <div className={styles.Laptop_Slider}>
                    <Carousel
                        boolean={true}
                        width='500px'
                        mainImage={this.state.laptop.image}
                        secondImage={this.state.laptop.image}
                        thirdImage={this.state.laptop.image}
                    />
                </div>
                <div className={`${styles.laptop} ${styles.Laptop_Labels}`}>
                    <p>
                        {this.state.laptop.brand}
                    </p>
                    <p>
                        {this.state.laptop.name}
                    </p>
                </div>
                <div className={`${styles.Laptop_Cart_Box} ${styles.Price_Box}`}>
                    <p className={styles.box_sold}>Sold and Shipped By: <span>Linh Cell</span></p>
                    <div className={styles.Laptop_Cart_Box_Prices}>
                        <ul className={styles.box_list}>
                            <li className={styles.Laptop_Purchase_Original}>
                                Original: <span>${this.state.laptop.original}</span>
                            </li>
                            <li className={styles.Laptop_Purchase_Savings}>
                                Savings: ${this.state.laptop.savings}
                            </li>
                            <li className={styles.Laptop_Purchase_Price}>
                                Price: ${this.state.laptop.price}
                            </li>
                        </ul>
                    </div>
                    <div className={styles.Laptop_Order_Container}>
                        <div >
                            <p>
                               
                            </p>
                        </div>
                        <div className={styles.Laptop_Purchase_Button}>
                            <Link to={'/laptops/purchase/' + this.props.match.params.id}>
                                <button className={`${styles.Laptop_Order_Purchase_Button}`}>
                                    <FontAwesomeIcon icon="shopping-cart"/> Purchase
                                </button>
                            </Link>
                        </div>
                    </div>
                    {authVerified}
                </div>
                <div className={styles.Laptop_Tabs}>
                    <TabsNav/>
                </div>
            </Fragment>
        );
    };
};

const mapStateToProps = (state) => {
    return{
        authenticated: state.authenticated
    }
}

export default connect(mapStateToProps)(Laptop);