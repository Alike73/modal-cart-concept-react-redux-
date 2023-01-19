import { useSelector } from "react-redux";
import catCart from "../../Assets/cart-cat.png";

import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

import { gsap } from "gsap";




const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    gsap.config({
        nullTargetWarn: false,
    });
    let tl = gsap.timeline();
    tl.fromTo(".totalValue", {rotation: 0}, {delay: .3, duration: .5, rotation: 360})
    tl.fromTo(".CartItemsTitle", {opacity: 0, y: 30}, {duration: .5, opacity: 1, y: 0})
    tl.fromTo(".catInTheCart", {opacity: 0, x: "-100%"}, {duration: .8, opacity: 1, x: "0%"})
    

    return (
        <div>
        {/* ---------MODAL-CART----------- */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modalLogoBox w-100">
                                <h3 className="modal-title fs-3 CartItemsTitle" id="exampleModalLabel">Cart Items</h3>
                                <img className="catInTheCart" src={catCart} alt="catInTheCart" />
                                <h3 className="text-center ModalTotal mt-3">
                                    Total: <span className="totalValue"><i className="fa-solid fa-dollar-sign"></i>{totalPrice}</span>
                                </h3>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div className="modal-body">
                            
                            <hr />
                            {cartItems.map((cartItem, index) => <CartItem cartItem = {cartItem} key = {index} />)}
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning me-auto" data-bs-dismiss="modal"><i className="fa-solid fa-house-user"></i> Home</button>
                            <button type="button" className="btn btn-secondary w-50" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <i className="fa-regular fa-credit-card"></i> Check out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Cart;
