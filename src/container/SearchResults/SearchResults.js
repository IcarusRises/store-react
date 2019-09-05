import React, {Component} from 'react';
import Cards from '../../component/Cards/Cards';

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

    render(){
        this.props.location.state.results.map(x => console.log(this.props.location.state.results))
        return this.props.location.state.results.map(laptopResults => this.renderLaptop(laptopResults))
    }  
}

export default SearchResults;