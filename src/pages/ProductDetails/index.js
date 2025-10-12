import { useParams } from 'react-router-dom';
import { products } from '../Home'; 
import { prodDetails } from './details';
import { NavBar } from '../../components/Navbar';
import { useCart } from '../../context/cartContext';

export const handleBuy = (Pid, cartDispatch) => {
  alert("The product has been added to the cart!");
  cartDispatch({
    type: 'buyProd',
    payload: products.find((p) => p.id===Pid)
  })
};

export const handleRent = (Pid, cartDispatch) => {
  alert("The product has been added to the cart!");
  cartDispatch({
    type: 'rentProd',
    payload: products.find((p) => p.id===Pid)
  })
};

export const ProductDetails = () => {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === id); 
  const { cartDispatch } = useCart();

  if (!product) return <h2>Product not found!</h2>;

  const prod = prodDetails.find((p) => p.id === id);

  return (
    <>
      <NavBar />
      <div className="product">
        <img className="prodImg" src={product.imgSrc} alt={product.title}/>
        <div className='prodContent'>
        <h1 className='prodTitle'>{product.title}</h1>
        <p className='prodText'>{product.text}</p>
        <p className='prodDetails'>{prod.details(id, cartDispatch)}</p>
        </div>
      </div>
    </>
  );
};
