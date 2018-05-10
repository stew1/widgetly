import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="site-logo">Widgetly</div>
        <div className="navigation">
          <div onClick={() => this.props.displayWidgets()}>Widgets</div>
          <div onClick={() => this.props.displayInventory()}>Inventory</div>
          <div onClick={() => this.props.displayCart()}>Cart</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
