import './App.css';
import {Routes, Route} from 'react-router-dom'
import Product from './pages/product';
import Payment from './pages/Payment';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
        <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='product' element = {<Product />}></Route>
      <Route path='payment' element = {<Payment />}></Route>
      <Route path="*" element = {<NoMatch />}></Route>
    </Routes>
    </>
  );
}

export default App; 
