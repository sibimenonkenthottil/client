import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { store } from './store/store';
import { actions } from './store/actions';
import { LandingPage } from './LandingPage';
import { FilmDetails } from './FilmDetails';
import { NotFound } from './NotFound';
import { Checkout } from './Checkout';
import { Account } from './Authentication/Account';
import { Login } from './Authentication/Login'
import { PickSeats } from './PickSeats';
import { navLink } from 'react-dom';

import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.blue-indigo.min.css';
import currency from './Currency';
import { Date } from './Date';
import 'material-design-lite/material';

function App() {

  const styles = {
    navLink : {
      padding: 10,
      textTransform: 'uppercase',
      textDecoration: 'none'
    }
    
  }

  console.log(1234.567.toCurrency());

  const [state, setState] = useState(store.getState());
  console.log(JSON.stringify(state.user));
  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState({ ...store.getState() }));
    store.dispatch(actions.fetchInitialData());
    return unsubscribe;
  }, []);

  return (
    <div>
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <a href="/" style= {styles.navLink} className="mdl-layout-title">Dinner and a Movie</a>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            {state.user && <navLink href="/account" className="mdl-layout__tab">My account</navLink>}
            {state.user && <navLink href="/logout" className="mdl-layout__tab">logout</navLink>}
            {state.user && <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>}
            {!state.user && <a href="/login" className="mdl-layout__tab">Login</a>}
            {!state.user && <navLink to="/account" className="mdl-layout__tab">Register</navLink>}
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
        <nav className="mdl-navigation">
          <a href="/account" className="mdl-layout__link">My account</a>
          <a href="/logout" className="mdl-layout__link">logout</a>
          <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
          <a href="/login" className="mdl-layout__link">Login</a>
          <a href="/register" className="mdl-layout__link">Register</a>
        </nav>
      </div>
      <main className="mdl-layout__content">
          <Login/>
      </main>
      <footer>
      </footer>
    </div>
    
    
    </div>
  );
}

export default App;
