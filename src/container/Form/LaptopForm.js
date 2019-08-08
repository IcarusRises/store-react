import React, {Component} from 'react';
import axios from 'axios';
import styles from './LaptopForm.module.css';

class LaptopForm extends Component{
    state={
        laptop: {
            brand: "",
            name: "",
            image: "",
            original: "",
            savings: "",
            price: ""
        }    
    }

    inputChangeHandler = (e) => {
        const laptop = e.target.value
        console.log(laptop)
    };

    onSubmit = (e) => {
        e.preventDefault();

        const laptop = {
            brand: this.state.laptop.brand
        }
        
        axios.post('http://localhost:3001/laptops/add', laptop)
            .then(res => console.log(res.data))

        this.setState({
            laptop: laptop
        })
    }

    render(){
        return(
            <div className={styles.Container}>
                <p className={styles.Title}>New Laptop</p>
                <form action="" className={styles.Form} onSubmit={this.onSubmit}>
                    <input type="text" name="" value="" placeholder="Brand"
                    onChange={this.inputChangeHandler}/>
                    <input type="text" name="" value="" placeholder="Name"
                    onChange={this.inputChangeHandler}/>
                    <input type="text" name="" value="" placeholder="Main Image"
                    onChange={this.inputChangeHandler}/>
                    <input type="text" name="" value="" placeholder="Image"
                    onChange={this.inputChangeHandler}/>
                    <input type="text" name="" value="" placeholder="Image"
                    onChange={this.inputChangeHandler}/>
                    <input type="text" name="" value="" placeholder="Original Price"
                    onChange={this.inputChangeHandler}/>
                    <input type="text" name="" value="" placeholder="Savings"
                    onChange={this.inputChangeHandler}/>
                    <input type="text" name="" value="" placeholder="Price"
                    onChange={this.inputChangeHandler}/>
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default LaptopForm;
