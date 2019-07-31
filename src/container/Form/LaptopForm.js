import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import EditLaptop from './EditLaptop';
import CreateLaptop from './CreateLaptop';

import styles from './LaptopForm.module.css';



function LaptopForm(){
    return(
        <Switch>
            <Route path="/update/:id" exact component={EditLaptop}/>
            <Route path="/create" component={CreateLaptop}/>
        </Switch>
    )
}

export default LaptopForm;