import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import "./EditProduct.css"
import { useEffect, useState} from "react"
import axios from "axios"


const EditProduct = () => {

    const {id} = useParams()
    const [product,setProduct]=useState([])
    const Navigate = useNavigate()

    //edit product
    const EditProduct = async(e)=>{
        e.preventDefault()
        const response = await axios.put("https://65732380192318b7db419d5a.mockapi.io/Product/" + id,product)
     if(response.status==200){
            Navigate("/singleProduct/"+id)
        } else {alert("something went wrong!!")
        }
    }

    //fetch produt id
    const fetchProduct =async ()=>{
    const response = await axios.get("https://65732380192318b7db419d5a.mockapi.io/Product/" + id)
    setProduct(response.data)
    }

    useEffect(()=>{
        fetchProduct()
    },[])
  return (
<>
    <Navbar/>
   
   <div id="Product-form">
    <form onSubmit={EditProduct}>
    <h2>Edit Product</h2>
           <label htmlFor="ProductImg">Product Image URL:</label>
           <input value={product.ProductImg} type="text" id="ProductImg" name="ProductImg" onChange={(e)=>setProduct({...product,ProductImg: e.target.value})} required />
   
           <label htmlFor="ProductName">Product Name:</label>
           <input value={product.ProductName} type="text" id="ProductName" name="ProductName" onChange={(e)=>setProduct({...product,ProductName:e.target.value})} required/>
   
           <label htmlFor="ProductDescription">Product Description:</label>
           <textarea value={product.ProductDescription} id="ProductDescription" name="ProductDescription" rows="4" onChange={(e)=>setProduct({...product,ProductDescription:e.target.value})} required></textarea>
   
           <label htmlFor="ProductMaterial">Product Material:</label>
           <input value={product.ProductMaterial} type="text" id="ProductMaterial" name="ProductMaterial" onChange={(e)=>setProduct({...product,ProductMaterial:e.target.value})} required/><br/>
   
           <button type="Submit">Update</button>
       </form>
       </div>
    </>
  )
}

export default EditProduct