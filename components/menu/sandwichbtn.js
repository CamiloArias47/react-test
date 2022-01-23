import style from './style-sandwichbtn'

export default function SandwichBtn({handlerClick}){
    return(
        <div className="sandwich-btn" onClick={handlerClick}>
            <div></div>
            <div></div>
            <div></div>
            <style jsx>{style}</style>
        </div>
    )
}