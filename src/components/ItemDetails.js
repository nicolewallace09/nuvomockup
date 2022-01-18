import StarRatings from "react-star-ratings";

// passing selectItem object 
const ItemDetails = ({ selectItem }) => {
    const displayItems = () => {
        // check is object is empty 
        let isEmpty = Object.keys(selectItem).length === 0; 

        // if not empty load data 
        if (!isEmpty) {
            let id = selectItem.id; 
            let price = selectItem.price.toFixed(2); 
            let description = selectItem.description; 
            let rating = selectItem.rating.rate; 
            let count = selectItem.rating.count; 

            return (
                <div className='item--details' key={id}>
                    <h2 className='item--price'>${price}</h2>
                    <p className='item--description'>{description}</p>
                    <StarRatings
                        rating={rating}
                        starRatedColor="#ffc107"
                        numberOfStars={5}
                        starDimension='1.2rem'
                        starSpacing='0rem'
                        className='item--rating'
                    />
                    <span className='item--rating-count'> ({count})</span>
                    <button className='item-button' type='button'>Add to Cart</button> 
                </div>
                )
             }
        }
    return (
        <>
        { displayItems() }
        </>
    )
}

export default ItemDetails; 