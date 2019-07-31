import React, {Component} from 'react';

class CreateLaptop extends Component{
    state={
        laptop: {
            brand: "",
        }    
    }

    inputChangeHandler = (e) => {
        const laptop = {
            ...this.state.laptop
        }
        this.setState({
            laptop: laptop
        });
        console.log(laptop)
    };

    onSubmit = (e) => {
        e.preventDefault();

        const laptop = {
            brand: this.state.brand
        }

        console.log(laptop);
    }

    render(){
        return(
            <div>
                <form action="" onSubmit={this.onSubmit}>
                    <input type="text"
                    onChange={this.inputChangeHandler}/>
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateLaptop;
