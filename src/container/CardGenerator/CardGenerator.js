import React, {Component} from 'react';
import axios from 'axios';

import Cards from '../../component/Cards/Cards';

class CardGenerator extends Component {
    state = {
        laptops: [],
    }

    componentDidMount() { 
        axios.get('http://localhost:3001/laptops/')
            .then(res => {
                let laptop = res.data;
                this.setState(prevState => ({
                    laptops: laptop
                }))
            })
            .catch(err => console.log('Error: ' + err))
        }
    
        

    renderLaptops = (laptop) => {
        return (
            <Cards
                brand={laptop.brand}
                />

        )
    }

    render(){
        return this.state.laptops.map(laptop => this.renderLaptops(laptop));
    }
}


export default CardGenerator;