import React, {Component} from 'react';

import Faker from 'faker';

import Cards from '../../component/Cards/Cards';

class CardGenerator extends Component {
    state = {
        laptops: []
    }

    componentDidMount() {
        for(let i = 0; i < 20; i++){
            let laptop = {
                image: Faker.image.technics(),
                name: Faker.commerce.productName(),
                price: '$' + Faker.commerce.price()
            }
            this.setState(prevState => ({
                laptops: [...prevState.laptops, laptop]
            }));
        }
    }

    renderLaptops = (laptop) => {
        return (
            <Cards
                image={laptop.image}
                name={laptop.name}
                price={laptop.price}/>
        )
    }

    render(){
        return this.state.laptops.map(laptop => this.renderLaptops(laptop));
    }
}

export default CardGenerator;