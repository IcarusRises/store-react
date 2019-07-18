import React, {Component} from 'react'; 

import styles from './LaptopForm.module.css';

class LaptopForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            formValues : {}
         }
    }
    

    inputChangeHandler = (e) => {
        let formValues = this.state.formValues;
        let value = e.target.value;
        let name = e.target.name;

        formValues[name] = value;

        this.setState({
            formValues
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.formValues);
    }

    render(){
        return(
            <form className={styles.Form} action="" onSubmit={this.submitHandler.bind(this)}>
                <input type="text" name="img"   value={this.state.formValues["img"]}   onChange={this.inputChangeHandler.bind(this)} placeholder="Image"/>
                <input type="text" name="name"  value={this.state.formValues["name"]}  onChange={this.inputChangeHandler.bind(this)} placeholder="Name"/>
                <input type="text" name="price" value={this.state.formValues["price"]} onChange={this.inputChangeHandler.bind(this)} placeholder="Price"/>
                <button>Submit</button>
            </form>
        )
    }
}

export default LaptopForm;