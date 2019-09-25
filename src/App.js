import React, {Component} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart, faSearch, faEnvelope, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import Page from './component/Page/Page';
import styles from './App.module.css';

library.add(faShoppingCart, faSearch, faEnvelope, faPlus, faMinus);

class App extends Component{
  render(){
    return(
        <div>
          <Page/>
        </div>
    )
  }
}

export default App;
