import React, { Children, cloneElement, useEffect, useState } from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import "./Carousel.css";

const ITEM_WINDOW = 450;

export default function Carousel ({children}) {

    const[items, setItems]=useState([])
    const[offset, setOffset] = useState(0)

    const handleLeftArrowClick = () =>{
        console.log('handleLeftArrowClick');
        setOffset(currentOffset => {
            const newOffset = currentOffset + ITEM_WINDOW
            console.log( newOffset)
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () =>{
        console.log('handleRightArrowClick');
        setOffset((currentOffset)=>{
           const newOffset = currentOffset - ITEM_WINDOW
           const maxOffset = -(ITEM_WINDOW * (items.length - 1))
           console.log(newOffset, maxOffset)
           return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(()=>{
        setItems(
            Children.map(children, child => {
                return cloneElement(child,{
                    style:{
                        height:'100%',
                        minWidth:`${ITEM_WINDOW}px`,
                        maxWidth:`${ITEM_WINDOW}px`,
                    },
                })
            })
        )
    },[])



   return( 
         <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
                <div className="window">
                    <div className="all-items-container" style ={{transform:`translateX(${offset}px)`}}>
                        {items}
                    </div>
                </div> 
            <FaChevronRight className="arrow" onClick={handleRightArrowClick}/>
        </div>
    )
}