import React, {Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import styles from './Searchbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Searchbar extends Component{
    state={
        results: [],
        query: ''
    }

    search = (query) => {
        const url = 'http://localhost:3001/search';
        axios.get(`${url}?search=${query}`)
        .then(res => {
            let results = res.data;
            this.setState({
                results: results
            });
        })
        .catch(err => console.log(err))
    }

    searchHandler = (e) => {
        this.setState({
            query: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.search(this.state.query)
    }

    componentDidMount(){
        this.search('')
    }

    render(){
        console.log('[SearchBar] ' + this.state)
        this.state.results.map(results => console.log(this.state.results))
        return(
            <div className={styles.Searchbar}>
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.searchHandler} type="text" name="search" placeholder="Search Laptops and Deals"/>
                    <button type="submit">
                        <FontAwesomeIcon icon="search"/>
                    </button>
                </form>
                {this.state.results.length > 0  &&
                    <Redirect to={{
                    pathname: '/search',
                    state: { results: this.state.results }
                    }}/> 
                }
            </div>
        );
    }
}




export default Searchbar;