import { useParams } from 'react-router-dom';
import { products } from '../Home'; 

export const ProductDetails = () => {
  const { id } = useParams(); // get id from URL
  const product = products.find((p) => p.id === id); // find the clicked product

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="product-details">
      <img src={product.imgSrc} alt={product.title} style={{ width: '400px', borderRadius: '10px' }} />
      <h2>{product.title}</h2>
      <p>{product.text}</p>
      {/* You can add price, rent option, size, etc. here */}
    </div>
  );
};
