import { useUI } from 'context/UIcontext'
import style from './style'

export default function Modal({children}){
    const { closeModal } = useUI()

    return(
        <div className="modal-block">
            <div className='modal-frame'>
            <button onClick={closeModal} className='btn-shine close-btn'>X</button>
                {children}
            </div>
            
            <style jsx>{ style }</style>
        </div>
    )
}