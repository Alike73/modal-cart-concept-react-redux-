

const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }


    return (
        <div>
            <div className="btn-group mt-3">
                <button onClick={removeQuantity} type="button" className="btn btn-sm btn-outline-secondary PlusBtn"><i className="fa-solid fa-minus"></i></button>
                <span className="quantityField">{quantity}</span>
                <button onClick={addQuantity} type="button" className="btn btn-sm btn-outline-secondary MinusBtn"><i className="fa-solid fa-plus"></i></button>
            </div>
            
        </div>
    )
}
export default ChangeQuantity;