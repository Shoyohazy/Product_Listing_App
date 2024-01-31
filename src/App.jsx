import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import AddProduct from './Components/AddProduct'
import Products from './Components/Products'
import Cart from './Cart/Cart'
import ViewProduct from './Components/ViewProduct'
import UpdateProduct from './Components/UpdateProduct'
import UserAdress from './Components/UserAdress'
import Thanks from './Utils/Thanks'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ViewProduct />} />
          <Route path="/Product/:id" element={<UpdateProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<UserAdress />} />
          <Route path="/cart/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
