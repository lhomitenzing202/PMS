import Navbar from "../../components/Navbar/Navbar"


const EditProduct = () => {
  return (
<>
    <Navbar/>
   
   <div id="Product-form">
    <form onSubmit={EditProduct}>
    <h2>Edit Product</h2>
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

export default EditProduct