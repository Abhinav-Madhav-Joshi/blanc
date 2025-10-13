import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { ProductDetails } from './pages/ProductDetails';
import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;