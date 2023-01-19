import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";

import { gsap } from "gsap";


const CartItem = ({cartItem}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();

    gsap.config({
        nullTargetWarn: false,
    });

    gsap.fromTo(".dishImgModal", {opacity: 0, x: "-100%"}, {delay: 2.1, duration: .5, opacity: 1, x: "0%"})
    gsap.fromTo(".ModalText", {opacity: 0, y: 30}, {delay: .9, opacity: 1, stagger: .1, y: 0})

    return (
        <div>
            <div className="modal-body">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col">
                        <div className="row">
                        <div className="col-sm-6">
                            <h3 className="text-center ModalImageDishName">{dishes.name}</h3>
                            <div className="frame-outer">
                                <div className="frame-inner">
                                    <img className="dishImgModal" src={`${dishes.img}.jpg`} alt="dishesImage" width="100%" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <p className="ModalText mt-3">Price/portion: <span className="modalTextValue"><i className="fa-solid fa-dollar-sign"></i>{dishes.price}</span></p>
                            <p className="ModalText">Quantity: <span className="modalTextValue">{cartItem.quantity}(pcs)</span></p>
                            <p className="ModalText">Price: <span className="modalTextValue"><i className="fa-solid fa-dollar-sign"></i>{dishes.price * cartItem.quantity}</span></p>
                            <div className="mt-3 py-3 w-100 d-flex justify-content-center">
                                <span className="trashBox" onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
export default CartItem;