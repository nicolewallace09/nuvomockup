import { useState, useEffect } from 'react';  
import axios from 'axios'; 
import ItemDetails from './ItemDetails';

const ItemList = () => {
    const [items, setItems] = useState([]); 
    const [selectItem, setSelectItem] = useState({}); 

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=5')
        .then((response) => {
            setItems(response.data); 
            setSelectItem(response.data[0]); 
        })
        .catch((err) => console.log(err)); 
    }, []); 

    const rightArrow = 'https://img.icons8.com/flat-round/48/000000/arrow-right.png';
    const leftArrow = 'https://img.icons8.com/flat-round/64/000000/arrow-left.png'; 

    return (
        <div className='row'>
            <div className='column'>
                {items && items.map((item) => {
                    return (
                        <div className='item-row' key={item.id}>
                            <img 
                                src={item.image} 
                                alt={item.title}
                                className='item-column-image'
                                width='3rem'
                                height='150rem'
                            />
                            <p className='item-column-title'>{item.title}</p>
                            <img 
                                src={rightArrow} 
                                className='item-column-arrow'
                                alt='arrow pointing right' 
                                onClick={(e) => {setSelectItem(item)}}
                                />

                            { selectItem.id === item.id ? ( rightArrow ) : (leftArrow)}
                        </div>
                )})}
            </div>
                <div className='column item-details'>
                    <ItemDetails selectItem={selectItem}/>
                </div>
        </div>
    )
}

export default ItemList; 