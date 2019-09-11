import React, {Component} from 'react';
import axios from 'axios';
import styles from './LaptopForm.module.css';

class EditLaptop extends Component{
    state = {
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

    componentDidMount(){
        axios.get('http://localhost:3001/laptops/edit/' + this.props.match.params.id)
             .then(res => {
                let laptop = res.data;
                console.log('[res]' + JSON.stringify(res.data))
                this.setState({
                    laptop: {
                        brand: {
                            value: laptop.brand
                        },
                        name: {
                            value: laptop.name
                        },
                        image: {
                            value: laptop.image
                        },
                        original: {
                            value: laptop.original
                        },
                        savings: {
                            value: laptop.savings
                        },
                        price: {
                            value: laptop.price
                        }
                    }    
                })
            })
            .then(console.log('[ComponentMount]' + this.state.laptop))
            .catch(err => console.log(err))
    }

    inputChangeHandler = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        // this.setState({
        //     laptop: {
        //         ...this.state.laptop,
        //         [name]: {
        //             ...this.state.laptop[name],
        //             value
        //         }
        //     }
        // });

        this.setState(prevState => ({
            laptop: {
                ...prevState.laptop,
                [name]: {
                    ...this.state.laptop[name],
                    value
                }
            }
        }));
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
        axios.post('http://localhost:3001/laptops/update/' + this.props.match.params.id, laptop)
            .then(res => console.log('[UPDATE]' + res.data))
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div className={styles.Container}>
                <p className={styles.Title}>Edit Laptop</p>
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

export default EditLaptop;
