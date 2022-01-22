import { dotStyle } from './style'

export default function Dot({move, handlerClick , active}){
    
    return(
        <>
            <button 
                className={ active ? 'active' : ''}
                data-move={move}
                onClick={handlerClick}>
            </button>
            <style jsx>{ dotStyle }</style>
        </>
    )
}