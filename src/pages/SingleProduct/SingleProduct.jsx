
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import "./SingleProduct.css"
import axios from "axios"
import { useEffect, useState } from "react"

const SingleProduct =  () => {

  const navigate = useNavigate()
     const {id} = useParams()
     //store data data coming in product
     const[product,setProduct] = useState({})

     //delete product
  const deleteProduct = async()=>{
    const response = await axios.delete("https://65732380192318b7db419d5a.mockapi.io/Product/"+id)
    if(response.status==200){
      navigate("/")
    }else{
      alert("Something went wrong!!")
    }
  }
 
   //fetch single product
    const fetchSingleProduct = async ()=>{
      const response = await axios.get("https://65732380192318b7db419d5a.mockapi.io/Product/"+id)
    setProduct(response.data)
    }
    useEffect(()=>{
   fetchSingleProduct()
    },[])
    console.log(product)
  return (
   <>
<Navbar/>
<div id="Product-form">
<div className="card">
<img src={product.ProductImg} alt="Product Image"/>
        <h2 className="product-name">{product.ProductName}</h2>
        <p className="product-description">{product.ProductDescription}</p>
        <mark> {product.ProductMaterial}</mark><br/>
        <button onClick={deleteProduct}>Delete</button>
        <button onClick={()=>navigate(`/editProduct/${product.id}`)}>edit</button>
        
        </div>
        </div>
    </>
  )
}

export default SingleProduct