
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
        <div className="navbar" id="myNavbar">
    {/* <a href="#" className="logo">Logo</a> */}
    {/* <a href="#">Home</a> */}
    {/* <a href="/addProduct">Add Products</a> */}
    <Link to ="#" className='Logo'>Logo</Link>
    <Link to ="/Home">Home</Link>
    <Link to ="/addProduct">Add Product</Link>
    </div>
    
  )
}

export default Navbar