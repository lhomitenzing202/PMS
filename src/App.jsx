import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import AddProduct from './pages/AddProduct/AddProduct'
import SingleProduct from './pages/singleProduct/singleProduct'
import EditProduct from './pages/EditProduct/EditProduct'



function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/addProduct'element={<AddProduct/>}/>
     <Route path='/singleProduct/:id'element={<SingleProduct/>}/>
     <Route path='/editProduct/:id'element={<EditProduct/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
