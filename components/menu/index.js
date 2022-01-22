import { useEffect } from 'react'
import { useUI } from 'context/UIcontext'
import Img from 'next/image'
import logoMenu from 'public/images/logos/logo-menu.svg'
import SandwichBtn from './sandwichbtn'
import style from './style'

export default function Menu(){

    const { openModal, displayModal, activateScroll, uName } = useUI()

    useEffect( () => {
        activateScroll(displayModal)
    },[displayModal])

    const nameOrLogin = uName === '' ? (
        <button 
            className='btn-shine'
            onClick={openModal}
        >
            Login
        </button>
    ) 
    : uName
    

    return(
        <nav>
            <div className='wraper-nav'>
                <div>
                    <Img
                        src={logoMenu}
                        alt="logo menu"
                        priority
                    />
                </div>
                <div>
                    <ul className='desktop-menu'>
                        <li>
                            <a>INICIO</a>
                        </li>
                        <li>
                            <a>BENEFICIOS</a>
                        </li>
                        <li>
                            { nameOrLogin }
                        </li>
                    </ul>
                    <SandwichBtn />
                </div>
            </div>
            <style jsx>{style}</style>
        </nav>
    )
}