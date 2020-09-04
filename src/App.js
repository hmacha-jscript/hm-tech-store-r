import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { About, Cart, Checkout, Error, Home, Login, ProductDetails, Products } from './pages';
//components
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/login" component={Login}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route path="/products/:productId" component={ProductDetails}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </Router>
  );
}
