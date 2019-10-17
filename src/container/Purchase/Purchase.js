import React, {Component, Fragment} from 'react';
import styles from './Purchase.module.css';

class Purchase extends Component {
    state={
        form: {
            name: {
                value:''
            },
            payment: {
                value:''
            },
            email: {
                value:''
            }
        },
    }

    inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            form: {
                ...this.state.form,
                [name]: {
                    ...this.state.form[name],
                    value
                }
            }
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        const form = {
            name: this.state.form.name.value,
            payment: this.state.form.payment.value,
            email: this.state.form.email.value
        };
        console.log(`[form] ${JSON.stringify(form)}`);
    }

    render(){
        return(
            <Fragment>
                <div className={styles.Purchase_Area_E}>
                    E
                </div>
                <div className={styles.Purchase_Area_A}>
                    A
                </div>
                <div className={`${styles.Purchase_Area_B} ${styles.Purchase_Form}`}>
                    <form onSubmit={this.submitHandler}>
                        <label>
                            <input type="text" 
                                   name="name" 
                                   placeholder='Name' 
                                   onChange={this.inputHandler}
                            />
                        </label>
                        <label>
                            <select name="payment" value={this.state.form.payment.value} onChange={this.inputHandler}>
                                <option value="" disabled selected>Purchase Method</option>
                                <option value="cash">Cash</option>
                                <option value="bank">Bank</option>
                            </select>
                        </label>
                        <label>
                            <input type="email" 
                                   name='email' 
                                   placeholder='E-Mail' 
                                   onChange={this.inputHandler}
                            />
                        </label>
                        <button>
                            Purchase
                        </button>
                    </form>
                </div>
                <div className={styles.Purchase_Area_C}>
                    C
                </div>
                <div className={styles.Purchase_Area_D}>
                    D
                </div>
            </Fragment>
        )
    }
}

export default Purchase;