import React, { Component } from 'react';
import Category from './Category.js';

class CardPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { widgets, filters } = this.props;
    const filteredWidgets = widgets.filter(widget => {
      return filters.size === 0 ? true : filters.has(widget.category);
    });
    const categories = filteredWidgets.map((widget, index) => {
      return (
        <Category
          key={index}
          widget={widget}
          addProductToCart={this.props.addProductToCart}
        />
      );
    });

    return <div className="card-panel">{categories}</div>;
  }
}

export default CardPanel;
