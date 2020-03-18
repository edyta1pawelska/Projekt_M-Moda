import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Basket from "./pages/Basket";
import PageNotFound from "./pages/404";



function App() {
    return (
        <Router>
            <>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/basket" component={Basket} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </>
        </Router>
    );
}

export default App;