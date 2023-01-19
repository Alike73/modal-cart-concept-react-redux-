import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cartSlice";

import { gsap } from "gsap";


const TotalCart = () => {
    gsap.config({
        nullTargetWarn: false,
    });
    gsap.fromTo(".quantityBox", {rotation: 0}, {duration: .5, rotation: 360})

    const totalInCart = useSelector(getTotalPrice);
    return (
        <span className="quantityBox">
            <span className="quantityBoxValue">
                <i className="fa-solid fa-dollar-sign dollarInCart"></i> 
                {totalInCart}
            </span>
        </span>
    )
}
export default TotalCart;