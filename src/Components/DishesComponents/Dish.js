import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div>
            <main role="main">
                <div className="wrap">
                    <div className="product">
                        <figure>
                            <img className="product-image img-fluid" src={`${dish.img}.jpg`} alt="DishImage" />
                        </figure>
                    
                        <div className="product-description">
                    
                            <div className="info">
                                <h3 className = "CardTitle">{dish.name}</h3>
                                <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity} />
                            </div>
                    
                            <div className="price">
                            {dish.price}
                            </div>
                            <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}} className="w-100 mt-3 addBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Dish;