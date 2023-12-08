
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="card">
    <img src="https://via.placeholder.com/300" alt="Product Image"/>
        <h2 className="product-name">Product Name</h2>
        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget...</p>
    </div>
    </>
  )
}

export default Home