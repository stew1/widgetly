import React, { Component } from 'react';
import Card from './Card.js';

class Category extends Component {
  render() {
    const { widget } = this.props;
    const cards = widget.products.map((product, index) => {
      return <Card key={index} product={product} />;
    });

    return (
      <div className="category">
        <label className="category-label">{widget.category}</label>
        {cards}
      </div>
    );
  }
}

export default Category;
