import React, {Component} from 'react';
import axios from 'axios';
import styles from './LaptopForm.module.css';

class LaptopForm extends Component{
    state={
        laptop: {
            brand: {
                value: ''
            },
            name: {
                value: ''
            },
            image: {
                value: ''
            },
            original: {
                value:''
            },
            savings: {
                value: ''
            },
            price: {
                value: ''
            }
        }    
    }

    inputChangeHandler = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            laptop: {
                ...this.state.laptop,
                [name]: {
                    ...this.state.laptop[name],
                    value
                }
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const laptop = {
            brand:this.state.laptop.brand.value,
            name: this.state.laptop.name.value,
            image: this.state.laptop.image.value,
            original: this.state.laptop.original.value,
            savings: this.state.laptop.savings.value,
            price: this.state.laptop.price.value
        }
        axios.post('http://localhost:3001/laptops/add', laptop)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        console.log('[Submit]' + JSON.stringify(laptop))
    }

    render(){
        return(
            <div className={styles.Container}>
                <p className={styles.Title}>New Laptop</p>
                <form className={styles.Form} onSubmit={this.onSubmit}>
                    <input type="text" 
                           name="brand"
                           value={this.state.laptop.brand.value} 
                           placeholder="Brand"
                           onChange={this.inputChangeHandler}
                    />
                    <input type="text" 
                           name="name" 
                           value={this.state.laptop.name.value} 
                           placeholder="Name"
                           onChange={this.inputChangeHandler}
                    />
                    <input type="text" 
                           name="image" 
                           value={this.state.laptop.image.value} 
                           placeholder="Main Image"
                           onChange={this.inputChangeHandler}
                    />
                    <input type="text" 
                           name="original" 
                           value={this.state.laptop.original.value} 
                           placeholder="Original Price"
                           onChange={this.inputChangeHandler}
                    />
                    <input type="text" 
                           name="savings" 
                           value={this.state.laptop.savings.value}
                           placeholder="Savings"
                           onChange={this.inputChangeHandler}
                    />
                    <input type="text" 
                           name="price" 
                           value={this.state.laptop.price.value}
                           placeholder="Price"
                           onChange={this.inputChangeHandler}
                    />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default LaptopForm;
