
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory  category="men"/>}/>
        <Route path='/womens' element={<ShopCategory  category="women"/>}/>
        <Route path='/shoes' element={<Shop
        Category  category="shoe"/>}/>
        <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
        <Route/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
