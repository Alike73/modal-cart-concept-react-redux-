import catLogo from "../../Assets/cart-cat.png";
import chefLogo from "../../Assets/chef-icon1.png";
import { gsap } from "gsap";
import Checkout from "./Checkout";



const ThankUser = () => {

    gsap.config({
        nullTargetWarn: false,
    });

    const thankChefAndCat = (e) => {
        e.preventDefault();
        
        let tl = gsap.timeline();
        tl.fromTo(".thankChef", {opacity: 0, x: "-100%"}, {delay: .3, duration: .5, opacity: 1, x: "0%"})
        tl.fromTo(".thankCat", {opacity: 0, x: "-100%"}, {duration: .5 , opacity: 1, x: "0%"})
    }

    return (
        <div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <img className="thankCat" src={catLogo} alt="catLogo" />
                        <img className="thankChef" src={chefLogo} alt="chefLogo" />
                        <h1 className="modal-title fs-1" id="exampleModalLabel">
                            Thank you!
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h3>Your order will be delivered right to your door!</h3>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <Checkout thankChefAndCat = {thankChefAndCat} />
        </div>
    )
}
export default ThankUser;