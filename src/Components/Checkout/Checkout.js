


import logoRestaurant from "../../Assets/logo1.png";
import catInCart from "../../Assets/cart-cat.png";
import myLogo from "../../Assets/My-new-Logo.png";
import { getCartItems } from "../../redux/cartSlice";
import CheckoutItems from "./CheckoutItems";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cartSlice";
import { useState } from "react";


const Checkout = ({thankChefAndCat}) => {

    const year = new Date().getFullYear();
    const totalPrice = useSelector(getTotalPrice);
    const cartItems = useSelector(getCartItems);
    const [message, setMessage] = useState("");
    
    return (
        <div>
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                    <div className="modal-header HeaderCheckout">
                        <img className="logoRestaurant" src={logoRestaurant} alt="" />
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                        <span className="text-success fs-1">Italian</span>
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body checkoutBackground">
                    <div className="container">
                        <main>
                            <div className="py-5 text-center">
                                <img className="d-block mx-auto mb-4 checkoutCat" src={catInCart} alt="" width="72" />
                                <h2 className="text-primary fs-1 mb-5 checkoutFormTitle">Checkout form</h2>
                            </div>
                            {/* ----------------------------------------CART-ITEMS-------------------------------- */}
                            <div className="row g-5">
                            <div className="col-md-5 col-lg-4 order-md-last">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-primary">Your cart</span>
                                    <span className="badge bg-success rounded-pill px-3 py-2">Total: ${totalPrice}</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    {cartItems.map((cartItem, index) => <CheckoutItems cartItem = {cartItem} key = {index} />)}
                                </ul>
                                
                            </div>
                            <div className="col-md-7 col-lg-8">
                                <h4 className="mb-3 text-primary">Billing address</h4>
                                <form className="needs-validation" noValidate="">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="firstName" className="form-label">Full name</label>
                                        <input onChange={event => setMessage(event.target.value)} type="text" className="form-control" id="firstName" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="country" className="form-label">Country</label>
                                        <select className="form-select" id="country" required="">
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select className="form-select" id="state" required="">
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="same-address" />
                                    <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info" />
                                    <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                                </div>
                                <hr className="my-4" />
                                <h4 className="mb-3 text-primary">Payment</h4>
                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                        <label className="form-check-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                        <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>
                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label htmlFor="cc-name" className="form-label">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <button disabled={!message} onClick={thankChefAndCat} className="w-100 btn btn-primary btn-lg" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                    Place your order
                                </button>
                                </form>
                                <p className="text-danger text-center fs-5 mt-3">Start typing your information to place your order!</p>
                            </div>
                            </div>
                        </main>
                        <footer className="my-5 pt-5 text-muted text-center text-small">
                            <p className="mb-1">© {year} Created with <i className="fa-solid fa-heart"></i> by</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><img className="myLogo" src={myLogo} alt="myLogo" /></li>
                            </ul>
                        </footer>
                    </div>
                    
                    </div>
                    <div className="modal-footer checkoutModalFooter">
                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal"><i className="fa-solid fa-house-user"></i> Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;