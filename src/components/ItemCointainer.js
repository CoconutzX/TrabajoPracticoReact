import React, { useState } from 'react';
import ItemCount from './ItemCount'; 
import asyncMock from './asyncMock'; 

function ItemDetailContainer({ match }) {
  const productId = match.params.id;

  const product = asyncMock.find(item => item.id === parseInt(productId));

  const [quantity, setQuantity] = useState(1);

const handleQuantityChange = newQuantity => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <h2>{product.destination}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      
      <ItemCount
        stock={10} 
        initial={1} 
        onQuantityChange={handleQuantityChange} 
      />

      <button onClick={() => addToCart(product, quantity)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;