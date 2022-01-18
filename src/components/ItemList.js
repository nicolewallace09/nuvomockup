import { useState, useEffect } from 'react';  
import axios from 'axios'; 
import ItemDetails from './ItemDetails';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png'; 

const ItemList = () => {
    // state for api items 
    const [items, setItems] = useState([]); 

    // state for selected items 
    const [selectItem, setSelectItem] = useState({}); 

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=5')
        .then((response) => {
            setItems(response.data); 
            setSelectItem(response.data[0]); 
        })
        .catch((err) => console.log(err)); 
    }, []); 

    return (
        <div className='row'>
            <div className='column'>
                {items && items.map((item) => {
                    return (
                        <div className='item-row' key={item.id}>
                            <div className='item-column-image'>
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className='item-image'
                                    width='90%'
                                    height='90%'
                                />
                            </div>
                            <p className='item-column-title'>{item.title}</p>
                    
                            <div className='item-column-arrow'>
                            { selectItem.id === item.id ? (   
                            <img 
                                src={rightArrow} 
                                className='item-arrow'
                                alt='arrow pointing right' 
                                onClick={(e) => {setSelectItem(item)}}
                                />
                                 ) : ( 
                            <img 
                                src={leftArrow} 
                                className='item-arrow'
                                alt='arrow pointing left' 
                                onClick={(e) => {setSelectItem(item)}}
                                />
                            )}
                            </div>
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