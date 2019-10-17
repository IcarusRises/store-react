import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import Carousel from '../../component/Carousel/Carousel';
import SideBar from '../Sidebar/Sidebar';
import styles from './BrandsPage.module.css';

class BrandsPage extends Component{
    state={
        laptop: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/laptops')
            .then(res => {
                let laptop = res.data;
                this.setState({
                    laptop : laptop
                })
            })
    }

    render( links=[
            {to: '/', label: 'Home'},
            {to:'/laptops', label: 'Laptop'},
            {to:'/laptops/brand', label: 'Brand'},
        ]
    ){
        return(
            <Fragment>
                <BreadCrumbs links={links}/>
                <div className={`${styles.BrandsPage_Area_A} ${styles.BrandsPage_Area_A_Styles}`}>

                </div>
                <div className={`${styles.BrandsPage_Area_B} ${styles.BrandsPage_Slider}`}>
                    <Carousel
                        boolean={true}
                        width='500px'
                        mainImage={this.state.laptop.image}
                        secondImage={this.state.laptop.image}
                        thirdImage={this.state.laptop.image}
                    />
                </div>
                <div className={styles.BrandsPage_Area_C}>
                    C
                </div>
                <div className={`${styles.BrandsPage_Area_D} ${styles.BrandsPage_Container}`}>
                    <div className={`${styles.BrandsPage_Laptops_Title}`}>
                        <p>Brands</p>
                    </div>
                    <div className={`${styles.BrandsPage_Store}`}>
                        {
                            this.state.laptop.map(laptop => 
                                <Link className={styles.BrandsPage_Link} to={'/laptops/brand/' + laptop.brand}>
                                    <div className={styles.BrandsPage_Brand_Box}>
                                        {laptop.brand}
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BrandsPage;