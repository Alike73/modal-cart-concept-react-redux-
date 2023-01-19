
import dataDishes from "../../data/dataDishes";

const CheckoutItems = ({cartItem}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishId);

    return (
        <div>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-center lh-sm">
                    <h6 className="my-0 text-success">{dishes.name}</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 className="my-0 text-success">Price/portion:</h6>
                    </div>
                    <span className="text-muted"><span className="modalTextValue"><i className="fa-solid fa-dollar-sign"></i>{dishes.price}</span></span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 className="my-0 text-success">Quantity:</h6>
                    </div>
                    <span className="text-muted"><span className="modalTextValue">{cartItem.quantity}(pcs)</span></span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                        <h6 className="my-0 text-success">Price:</h6>
                    </div>
                    <span className="text-success"><span className="modalTextValue"><i className="fa-solid fa-dollar-sign"></i>{dishes.price * cartItem.quantity}</span></span>
                </li>
                
            </ul>
        </div>
    )
}
export default CheckoutItems;