import { useState } from 'react'
import Image from 'next/image'
import SlideItem from './slide-item'
import { ArrowIcon} from 'components/icons'
import Dot from './dot' 
import ClockIcon from 'public/images/slider/clock.svg'
import HomeOffice from 'public/images/slider/homeOffice.svg'
import Workshops from 'public/images/slider/workshop.svg'
import FruisIcon from 'public/images/slider/fruits.svg'
import style from "./style"

const ITEMS = [
    {image : <Image src={ ClockIcon } width={160}/>, text : 'FLexibilidad Horaria' },
    {image : <Image src={ HomeOffice } width={160}/>, text : 'Home Office' },
    {image : <Image src={ Workshops } width={160} />, text : 'Capacitaciones y Workshops' },
    {image : <Image src={ FruisIcon } width={160} /> , text : 'Snacks, frutas y bebidas gratis' },
    {image : <Image src={ ClockIcon } width={160} className='slide-desk'/>, text : 'FLexibilidad Horaria' },
]

const BTN = {
    left : 'l',
    right: 'right'
}

export default function Slider(){

    const [move, setMove] = useState(0)

    const handlerSlide = event =>{
        const btn = event.target.dataset.move
        let mov = btn === BTN.left ? move+160 : move-160
        
        if( 
            (btn === BTN.left && move >= 0) ||
            (btn === BTN.right && move <= -320)
        ){
            mov = 0
        }

        setMove(mov)
    }

    const handlerDotClick = event =>{
        let mov = event.target.dataset.move
        mov = Number(mov)

        setMove(mov)
    }

    const sliders = ITEMS.map( (item, i) => <SlideItem key={i+'-'+item.text} image={item.image} text={item.text} moveX={move}/>)

    return(
        <div className='slider'>

            <button className="btn-shine" data-move={BTN.left} onClick={handlerSlide}>
                <ArrowIcon 
                    width="32" 
                    height="32" 
                    data-move={BTN.left}
                />
            </button>

            <div className="visible-area-slides">
                    { sliders }
            </div>

            <button className="btn-shine" data-move={BTN.right} onClick={handlerSlide}>
                 <ArrowIcon 
                     width="32" 
                     height="32" 
                     className="to-right" 
                     data-move={BTN.right}
                  />
            </button>

            <div className="dots">
                <Dot 
                    move={0} 
                    active={move === 0 ? true : false} 
                    handlerClick={handlerDotClick} 
                />
                <Dot 
                    move={-160} 
                    active={move >= -160 && move < -10 ? true : false} 
                    handlerClick={handlerDotClick} 
                />
                <Dot 
                    move={-320} 
                    active={move >= -320 && move < -180 ? true : false }
                    handlerClick={handlerDotClick} 
                />
            </div>

            <style jsx>{ style }</style>
        </div>
    )
}
