import style from './style'

export default function Modal({children}){
    return(
        <div className="modal-block">
            <div className='modal-frame'>
                {children}
            </div>
            
            <style jsx>{ style }</style>
        </div>
    )
}