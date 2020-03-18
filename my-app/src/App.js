import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './App.css';
import Products from "./Products";
import Basket from "./Basket"
import Home from "./Home";


function App() {
    return (
        <Router>
            <>

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/basket" component={Basket} />
                </Switch>
            </>
        </Router>
    );
}

export default App;