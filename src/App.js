
import './App.css';
import italianFlag from "./Assets/italianFlag.png";
import logoRestaurant from "./Assets/logo1.png";
import cartIcon from "./Assets/Cart-icon3.png";
import chefLogo from "./Assets/chef-icon.png";
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Checkout from './Components/Checkout/Checkout';
import TotalCart from './Components/Cart/TotalCart';
import ThankUser from './Components/Checkout/ThankUser';


function App() {

  return (
    <div className="App">
      <ThankUser />
      <Cart />
      <Checkout />
      <header className="py-5 px-3 Header">
        <div className="container">
          <div className='d-flex  align-items-center'>
          <h1 className='HeaderTitle mb-3'>Italian Home Kitchen</h1>
            <img className='italianFlag' src={italianFlag} alt="" />
          </div>
          <p className='headerText'>
            We deliver delicious Italian dishes right to your door!
          </p>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img className='logoRestaurant me-auto' src={logoRestaurant} alt="logoRestaurant" />
            <img className='mx-auto chefLogo' src={chefLogo} alt="chefLogo" />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-5 justify-content-center mb-md-0">
              <li>
              <AllCategories />
              </li>
            </ul>
            <div className="text-end">
              <button type="button" className="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="cartBox">
                  <img className="cartIcon" src={cartIcon} alt="cartIcon" />
                  <TotalCart />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="headerDivider"></div>
      <h2 className='text-center my-5 Menu'><span className='ourMenuTitle'>OUR MENU</span></h2>
      <Dishes />
    </div>
  );
}
export default App;
