import React, { useState } from 'react';

function Item() {
  
  const [isInCart, setIsInCart] = useState(false);

  
  const toggleCartStatus = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li>
      Items
      <button onClick={toggleCartStatus}>
        
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
