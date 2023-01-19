import Filter from "./Filter";


const AllCategories = () => {
    return (
        <div className="frame-outer">
            <div className="frame-inner">
                <h2 className="mb-3 CategoryTitle">Our menu:</h2>
                {["SEAFOOD", "ITALIAN", "APPETIZERS", "SALADS", "ALL"].map((category, index) => <Filter category = {category} key = {index} />)}
            </div>
        </div>
    )
}
export default AllCategories;