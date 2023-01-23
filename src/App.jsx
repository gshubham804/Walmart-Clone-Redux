import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import LoginForm from './Components/Authentication/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddToCart from './Components/Cart/AddToCart';
import ProductList from './Components/ProductList/ProductList';
import {Provider} from 'react-redux';
import store from './Components/Context/store';

function App() {
  return (
   <Provider store={store}>
   <Router>
   <Navbar/>
      <Routes>
      <Route path="/" element={<HeroSection />}/>
      <Route path="/cart" element={<AddToCart/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/signin" element={<LoginForm/>}/>
      </Routes>
    </Router>
   </Provider>
  );
}

export default App;
