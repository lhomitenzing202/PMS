import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
        <div className="navbar" id="myNavbar">
    <Link to ="/" className='Logo'>Logo</Link>
    <Link to ="/" className='Logo'>Home</Link>
    <Link to ="/addProduct" className='Logo'>Add Product</Link>
    </div>
    
  )
}

export default Navbar
