import StarRatings from "react-star-ratings";

const ItemDetails = ({ selectItem}) => {
    if (selectItem) {
    return (
        <div className='item--details' key={selectItem.id}>
            <h2 className='item--price'>${selectItem.price}</h2>
            <p className='item--description'>{selectItem.description}</p>
            <StarRatings
                rating={selectItem.rating.rate}
                starRatedColor="#ffc107"
                numberOfStars={5}
                starDimension='2rem'
                starSpacing='0.1rem'
                name='item--rating'
            />
            <span className='item--rating-count'> ({selectItem.rating.count})</span>
            <button className='item-button' type='button'>Add to Cart</button>
        </div>
        )
    }
    return (
        <>
        </>
    )
}

export default ItemDetails; 