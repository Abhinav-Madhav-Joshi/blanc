import logo from './logo.svg';
import { Home } from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    

    </>
  );
}

export default App;
