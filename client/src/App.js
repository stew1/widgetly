import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardPanel from './components/CardPanel';
import FilterPanel from './components/FilterPanel';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Inventory from './components/Inventory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      displayCart: false,
      displayInventory: false,
      displayWidgets: true,
      widgets: [],
      filters: new Set(),
    };

    this.addProductToCart = this.addProductToCart.bind(this);
    this.displayCart = this.displayCart.bind(this);
    this.displayInventory = this.displayInventory.bind(this);
    this.displayWidgets = this.displayWidgets.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.loadAllWidgets = this.loadAllWidgets.bind(this);
  }

  componentDidMount() {
    this.loadAllWidgets();
  }

  toggleFilter(filter) {
    let newState = new Set(this.state.filters);
    this.state.filters.has(filter)
      ? newState.delete(filter)
      : newState.add(filter);

    this.setState({
      filters: newState,
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

  loadAllWidgets() {
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
      displayInventory: false,
      displayWidgets: false,
    });
  }

  displayInventory() {
    this.setState({
      displayInventory: !this.state.displayInventory,
      displayCart: false,
      displayWidgets: false,
    });
  }

  displayWidgets() {
    this.setState({
      displayWidgets: true,
      displayCart: false,
      displayInventory: false,
    });
  }

  render() {
    // Set up page layout for widgets, inventory, cart "pages"
    let widgetsPage = (
      <React.Fragment>
        <FilterPanel
          widgets={this.state.widgets}
          toggleFilter={this.toggleFilter}
        />
        <CardPanel
          widgets={this.state.widgets}
          filters={this.state.filters}
          addProductToCart={this.addProductToCart}
        />
      </React.Fragment>
    );

    let cartPage = (
      <React.Fragment>
        <Cart cart={this.state.cart} />
      </React.Fragment>
    );

    let inventoryPage = (
      <React.Fragment>
        <Inventory
          widgets={this.state.widgets}
          loadAllWidgets={this.loadAllWidgets}
        />
      </React.Fragment>
    );

    let layout;
    if (this.state.displayCart) {
      layout = cartPage;
    } else if (this.state.displayInventory) {
      layout = inventoryPage;
    } else {
      layout = widgetsPage;
    }

    return (
      <div className="App">
        <Navbar
          displayCart={this.displayCart}
          displayInventory={this.displayInventory}
          displayWidgets={this.displayWidgets}
        />
        {layout}
      </div>
    );
  }
}

export default App;
