import { useState, useEffect } from 'react'
import style from './style-item'

export default function SlideItem({ image, text, moveX}){

    const [slide, setSlide] = useState(`translateX(${moveX}px)`)

    useEffect(()=>{
        setSlide(`translateX(${moveX}px)`)
    },[moveX])

    return(
        <div className="slide-item" style={{transform:slide}}>
            <div className='slide-image-item'>
                { image }
            </div>
            <div className="slide-item-text">
                { text }
            </div>
            
            <style jsx>{ style }</style>
        </div>
    )
}