import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import './AddProduct.css'
import axios from "axios"


const AddProduct = () => {

    //First approach to integrate Products
    // const[ProductImg,setProductImg]=useState("")
    // const[ProductName,setProductName]=useState("")
    // const[ProductDescription,setProductDescription]=useState("")
    // const[ProductMaterial,setProductMatreial]=useState("")

    // const AddProduct = async(e)=>{
    //     e.preventDefault()
    //     const response = await axios.post("https://65732380192318b7db419d5a.mockapi.io/Product",{
    //         ProductImg:ProductImg,
    //         ProductName:ProductName,
    //         ProductDescription:ProductDescription,
    //         ProductMaterial:ProductMaterial
    //     })
    //     console.log(response)
    // }

 
//   return (
//  <>
//  <Navbar />

// <div id="Product-form">
//  <form onSubmit={AddProduct}>
//         <label htmlFor="ProductImage">Product Image URL:</label>
//         <input type="text" id="ProductImage" name="ProductImage" onChange={(e)=>setProductImg(e.target.value)}/>

//         <label htmlFor="ProductName">Product Name:</label>
//         <input type="text" id="ProductName" name="ProductName" onChange={(e)=>setProductName(e.target.value)}/>

//         <label htmlFor="ProductDescription">Product Description:</label>
//         <textarea id="ProductDescription" name="ProductDescription" rows="4" onChange={(e)=>setProductDescription(e.target.value)}></textarea>

//         <label htmlFor="ProductMaterial">Product Material:</label>
//         <input type="text" id="ProductMaterial" name="ProductMaterial" onChange={(e)=>setProductMatreial(e.target.value)}/><br/>

//         <button type="submit">Submit</button>
//     </form>
//     </div>
//  </>

const AddProduct = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget);//{}
     const data = Object.fromEntries(formData)
    
     const response = await axios.post("https://65732380192318b7db419d5a.mockapi.io/Product",data)
     console.log(response)
    }

return (
    <>
    <Navbar />
   
   <div id="Product-form">
    <form onSubmit={AddProduct}>
           <label htmlFor="ProductImage">Product Image URL:</label>
           <input type="text" id="ProductImg" name="ProductImg" required />
   
           <label htmlFor="ProductName">Product Name:</label>
           <input type="text" id="ProductName" name="ProductName" required/>
   
           <label htmlFor="ProductDescription">Product Description:</label>
           <textarea id="ProductDescription" name="ProductDescription" rows="4" required></textarea>
   
           <label htmlFor="ProductMaterial">Product Material:</label>
           <input type="text" id="ProductMaterial" name="ProductMaterial" required/><br/>
   
           <button type="submit">Submit</button>
       </form>
       </div>
    </>
  )
}

export default AddProduct