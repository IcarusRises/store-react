import React, {Component} from 'react';
import Axios from 'axios';

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
            <div>
                <p>
                    {this.state.laptop.brand}
                </p>
                <p>
                    {this.state.laptop.name}
                </p>
                <img src={this.state.laptop.image} alt=""/>
            </div>
        );
    };
};

export default Laptop;