import React, {Component} from 'react';
import axios from 'axios';

import Cards from '../../component/Cards/Cards';

class CardGenerator extends Component {
    state = {
        laptops: [],
        test: null
    }

    componentDidMount() { 
        axios.get('http://localhost:3001/laptops/')
            .then(res => {
                let laptop = res.data;
                console.log('222', laptop);
                this.setState(prevState => ({
                    laptops: res.data
                }))

                this.setState({test: laptop})
            })
            .catch(err => console.log('Error: ' + err))

            
        }
    
        

    renderLaptops = (laptop) => {
        return (
            <Cards
               
                />

        )
    }

    render(){
        console.log("testtt", this.state.test)
        console.log("laptops", this.state.laptops[0])
                // return this.state.laptops.map(laptop => this.renderLaptops(laptop));
        return this.renderLaptops()
    }
}


export default CardGenerator;