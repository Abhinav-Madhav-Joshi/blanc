import { useParams } from 'react-router-dom';
import { products } from '../Home'; 
import { prodDetails } from './details';
import { NavBar } from '../../components/Navbar';


export const handleBuy = (Pid) => {
  console.log("Buy clicked for:", Pid.id);
};

export const handleRent = (Pid) => {
 console.log("Rent clicked for:", Pid.id);
};

export const ProductDetails = () => {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === id); 

  if (!product) return <h2>Product not found!</h2>;

  const prodID = prodDetails.find((p) => p.id === id);


  return (
    <>
      <NavBar />
      <div className="product">
        <div>
        <img className="prodImg" src={product.imgSrc} alt={product.title} style={{ width: '400px', borderRadius: '10px' }} />
        </div>
        <div className='prodContent'>
        <h1>{product.title}</h1>
        <p className='prodText'>{product.text}</p>
        <p className='prodDetails'>{prodID.details(prodID)}</p>
        </div>
      </div>
    </>
  );
};
