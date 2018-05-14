import React, { Component } from 'react';
import Category from './Category.js';

class CardPanel extends Component {
  render() {
    const { widgets, filters, search } = this.props;
    //filter widgets by category selection
    const filteredWidgets = widgets.filter(widget => {
      return filters.size === 0 ? true : filters.has(widget.category);
    });

    const categories = filteredWidgets.map((widget, index) => {
      return (
        <Category
          key={index}
          widget={widget}
          search={search}
          addProductToCart={this.props.addProductToCart}
        />
      );
    });

    return <div className="card-panel">{categories}</div>;
  }
}

export default CardPanel;
