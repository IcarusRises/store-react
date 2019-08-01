import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Page from './container/Page/Page';
import Toolbar from './component/Header/Toolbar/Toolbar';
import Footer from './component/Footer/Footer';
import Background from './component/BackgroundContainer/Background';
import Store from './component/Store/Store';
import LaptopForm from './container/Form/LaptopForm';

import styles from './App.module.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faSearch, faEnvelope, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faSearch, faEnvelope, faPlus, faMinus);

function App() {

  return (
    <BrowserRouter>
      <div className={styles.Container}>
        <Page/>
      </div>
    </BrowserRouter>
  );
}

export default App;
