import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import './AddProduct.css'
import axios from "axios"


const AddProduct = () => {
    const[ProductImg,setProductImg]=useState("")
    const[ProductName,setProductName]=useState("")
    const[ProductDescription,setProductDescription]=useState("")
    const[ProductMaterial,setProductMatreial]=useState("")

    const AddProduct = async(e)=>{
        e.preventDefault()
        const response = await axios.post("https://65732380192318b7db419d5a.mockapi.io/Product",{
            ProductImg:ProductImg,
            ProductName:ProductName,
            ProductDescription:ProductDescription,
            ProductMaterial:ProductMaterial
        })
        console.log(response)
    }

 
  return (
 <>
 <Navbar />

<div id="product-form">
 <form onSubmit={AddProduct}>
        <label htmlFor="productImage">Product Image URL:</label>
        <input type="text" id="productImage" name="productImage" onChange={(e)=>setProductImg(e.target.value)}/>

        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" name="productName" onChange={(e)=>setProductName(e.target.value)}/>

        <label htmlFor="productDescription">Product Description:</label>
        <textarea id="productDescription" name="productDescription" rows="4" onChange={(e)=>setProductDescription(e.target.value)}></textarea>

        <label htmlFor="productMaterial">Product Material:</label>
        <input type="text" id="productMaterial" name="productMaterial" onChange={(e)=>setProductMatreial(e.target.value)}/><br/>

        <button type="submit">Submit</button>
    </form>
    </div>
 </>
  )
}

export default AddProduct