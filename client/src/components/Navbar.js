import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="site-logo">Widgetly</div>
        <div className="navigation">
          <div>Widgets</div>
          <div>Inventory</div>
          <div>Cart</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
