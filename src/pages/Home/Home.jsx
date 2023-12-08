
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import axios from 'axios'

const Home = () => {

    const[Products,setProducts]= useState([])
    const fetchPorduct = async() => {
    const response = await axios.get("https://65732380192318b7db419d5a.mockapi.io/Product")
    setProducts(response.data)
}

    useEffect(()=>{
   fetchPorduct()
    },[])
    
    
  return (
    
    <>
    <Navbar/>
    {
        Products.map((Product)=>{
            return (
            <div key={Product.id}  className="card">
    <img src={Product.ProductImg} alt="Product Image"/>
        <h2 className="product-name">{Product.ProductName}</h2>
        <p className="product-description">{Product.ProductDescription}</p>
        <p className="product-material">{Product.ProductMaterial}</p>
    </div>
            )
        })
    }
    </>
  )
}

export default Home