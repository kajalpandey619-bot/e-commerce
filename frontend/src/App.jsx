import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import PrivateRouter from './components/PrivateRouter';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route element={<PrivateRouter />}>
          <Route path='/checkout' element={<CheckoutPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;