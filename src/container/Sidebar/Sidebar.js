import React, {Component} from 'react';
import axios from 'axios';
import NavigationItem from '../../component/NavigationItems/NavigationItem/NavigationItem';
import styles from './Sidebar.module.css';

class Sidebar extends Component {
    state ={
        laptop: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/laptops')
            .then(res => {
                let laptop = res.data;
                this.setState(prevState =>({
                    laptop : laptop
                }))
            })
            .catch(err => console.log(err));
    }

    renderLinks = (laptop) => {
        return <NavigationItem link={`/laptops/brand/${laptop.brand}`}>{laptop.brand}</NavigationItem>
    }

    render(
       
    ){
        console.log(this.state.laptop);
        return(
            <div className={styles.Sidebar_Container}>
                <ul className={`${styles.Sidebar} ${styles.Sidebar_Slide}`}>
                    <NavigationItem link={'/laptops/brand'}>Brands</NavigationItem>
                    {
                        this.state.laptop.sort((a,b) => a.brand > b.brand).map(link => this.renderLinks(link))
                    }
                </ul>
            </div>
        )
    }
}

export default Sidebar;