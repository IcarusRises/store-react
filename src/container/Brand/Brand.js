import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import Carousel from '../../component/Carousel/Carousel';
import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import Cards from '../../component/Cards/Cards';
import styles from './Brand.module.css';



class Brand extends Component {
    state = {
        laptop: [],
    }


    componentDidMount() {
        axios.get('http://localhost:3001/laptops/brand/' + this.props.match.params.brand)
             .then(res => {
                 let laptop = res.data;
                 this.setState(prevState => ({
                     laptop: laptop
                 }))
             })
             .catch(err => console.log('ERROR' + err));
    }

    renderLaptops = (laptop) => {
        return (
            <Cards
                id={laptop._id}
                brand={laptop.brand}
                name={laptop.name}
                image={laptop.image}
                original={laptop.original}
                savings={laptop.savings}
                price={laptop.price}
                key={laptop._id}
                />
        )
    }

    render(links=[
            {to: '/', label: 'Home'},
            {to:'/', label: `Search Results`},
        ]
    ){
        return(
            <Fragment>
                <div className={styles.Brand_Area_E}>
                    <BreadCrumbs links={links}/>
                </div>
                <Sidebar/>
                <Carousel
                    boolean={false} 
                    mainImage={'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2018/09/image2-27-840x430.png'}
                    secondImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSoDWsQasjT6229m_l-fkW72AjIWImYFfr7wK73TLa6wmKMBC'}
                    thirdImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSoDWsQasjT6229m_l-fkW72AjIWImYFfr7wK73TLa6wmKMBC'}
                 />
                <div className={styles.Brand_Area_C}>
                    C
                </div>
                <div className={styles.Brand_Area_D}>
                    <div className={styles.Brand_Store_Laptops_Title}>
                        <p>{this.state.laptop.brand}</p>
                    </div>
                    <div className={`${styles.Brand_Store} ${styles.Brand_Store_Border_Bottom}`}>
                        {this.state.laptop.map(laptop => this.renderLaptops(laptop))}
                    </div>
                </div>
            </Fragment>
        ) 
    }
}

export default Brand;