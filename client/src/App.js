import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardPanel from './components/CardPanel';
import FilterPanel from './components/FilterPanel';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      displayCart: false,
      widgets: [],
    };

    this.addProductToCart = this.addProductToCart.bind(this);
    this.displayCart = this.displayCart.bind(this);
  }

  componentDidMount() {
    // Merge categories and products for complete widgets JSON structure
    Promise.all([this.loadWidgets(), this.loadCategories()]).then(values => {
      let widgets = [];
      let products = values[0];
      let categories = values[1];
      categories.forEach(c => {
        let category = {
          category: c.categoryName,
          products: products.filter(
            widget => widget.categoryID === c.categoryID
          ),
        };
        widgets.push(category);
      });
      this.setState({
        widgets: widgets,
      });
    });
  }

  loadWidgets() {
    return fetch('/api/widgets')
      .then(res => res.json())
      .then(products => products.response);
  }

  loadCategories() {
    return fetch('/api/categories')
      .then(res => res.json())
      .then(categories => categories.response);
  }

  addProductToCart(product, quantity) {
    let cartCopy = this.state.cart.slice();
    cartCopy.push(product);
    this.setState({
      cart: cartCopy,
    });
  }

  displayCart() {
    this.setState({
      displayCart: !this.state.displayCart,
    });
  }

  render() {
    console.log(this.state.cart);
    let display = this.state.displayCart ? (
      <div className="App">
        <Navbar displayCart={this.displayCart} />
        <Cart cart={this.state.cart} />
      </div>
    ) : (
      <div className="App">
        <Navbar displayCart={this.displayCart} />
        <FilterPanel />
        <CardPanel
          widgets={this.state.widgets}
          addProductToCart={this.addProductToCart}
        />
      </div>
    );
    return display;
  }
}

export default App;
