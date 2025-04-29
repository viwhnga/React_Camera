import React, { Component } from 'react';
import ShowCard from './ShowCard/ShowCard.js';

class RightContentt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('https://6809104e1f1a52874cdbc8bb.mockapi.io/apiCamera/Products')
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
      })
      .catch(error => {
        console.error('Lỗi khi fetch API:', error);
      });
  }

  render() {
    return (
      <div>
        <div id="right-content">
          <h2>Product :</h2>
          <div id="products">
            {this.state.products.map((product, index) => (
              <ShowCard
                key={index}
                loai={product.loai}
                name={product.name}
                image={product.image}
              />
            ))}
            <div style={{ clear: 'both' }} />
          </div>
          <div style={{ clear: 'both' }} />
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}

export default RightContent;
