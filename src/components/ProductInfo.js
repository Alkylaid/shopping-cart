import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
const ProductInfo = ({ inventory, addToCart }) => {
  let { id } = useParams();
  const [item, setItem] = useState(0);

  useEffect(() => {
    const newItem = inventory.find((product) => product.id === parseInt(id));

    setItem(newItem);
  }, [item, id, inventory]);

  return (
    <div id="content-container">
      {item && <ProductCard item={item} addToCart={addToCart} />}
    </div>
  );
};

export default ProductInfo;
