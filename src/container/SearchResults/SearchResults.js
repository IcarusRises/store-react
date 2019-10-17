import React, {Component, Fragment} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Carousel from '../../component/Carousel/Carousel';
import Cards from '../../component/Cards/Cards';
import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import styles from './SearchResults.module.css';

class SearchResults extends Component{
    renderLaptop = (laptop) => {
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

    render(
        links=[
            {to: '/', label: 'Home'},
            {to:'/', label: `Search Results`},
        ]
    ){
        return (
            <Fragment>
                <div className={styles.SearchResults_Area_E}>
                    <BreadCrumbs links={links}/>
                </div>
                <Sidebar/>
                <Carousel
                    boolean={false} 
                    mainImage={'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2018/09/image2-27-840x430.png'}
                    secondImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSoDWsQasjT6229m_l-fkW72AjIWImYFfr7wK73TLa6wmKMBC'}
                    thirdImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSoDWsQasjT6229m_l-fkW72AjIWImYFfr7wK73TLa6wmKMBC'}
                 />
                <div className={styles.SearchResults_Area_C}>
                        C
                </div>
                <div className={styles.SearchResults_Area_D}>
                    <div className={styles.SearchResults_Store_Laptops_Title}>
                        <p>Search Results:</p>
                    </div>
                    <div className={styles.SearchResults_Store}>
                        {
                            this.props.location.state.results.map(laptopResults => this.renderLaptop(laptopResults))
                        }
                    </div>
                </div>
            </Fragment>
        )
    }  
}

export default SearchResults;