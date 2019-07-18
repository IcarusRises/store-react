import React from 'react';

import Toolbar from './component/Header/Toolbar/Toolbar';
import Footer from './component/Footer/Footer';
import Background from './component/BackgroundContainer/Background';
import Store from './component/Store/Store';
import LaptopForm from './container/LaptopForm/LaptopForm';

import styles from './App.module.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faSearch, faEnvelope} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faSearch, faEnvelope);

function App() {

  return (
    <div className={styles.Container}>
      <Toolbar/>
        <LaptopForm/>
        <Background/>
        <Store/>
      <Footer/>
    </div>
  );
}

export default App;
