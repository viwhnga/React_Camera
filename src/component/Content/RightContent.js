// RightContent.js
import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard/ShowCard.js';

const RightContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://6809104e1f1a52874cdbc8bb.mockapi.io/apiCamera/Products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div id="right-content">
        <h2>Product :</h2>
        <div id="products">
          {products.map((product, index) => (
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
};

export default RightContent;
