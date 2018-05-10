import React, { Component } from 'react';

class Inventory extends Component {
  renderInventory(widgets) {
    let inventoryRows = [];
    widgets.forEach((widget, index) => {
      widget.products.forEach((product, index) => {
        let inventoryRow = (
          <div>
            <div key={index}>{product.name}</div>
            <div key={index}>{product.quantity}</div>
          </div>
        );
        inventoryRows.push(inventoryRow);
      });
    });
    console.log(inventoryRows);
    return inventoryRows;
  }

  render() {
    const { widgets } = this.props;
    return <div className="inventory">{this.renderInventory(widgets)}</div>;
  }
}

export default Inventory;
