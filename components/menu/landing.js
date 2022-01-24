import { useEffect } from 'react'
import { useUI } from 'context/UIcontext'
import { logout } from 'firebaseconf/auth/logout'
import Img from 'next/image'
import logoMenu from 'public/images/logos/logo-menu.svg'
import SandwichBtn from './sandwichbtn'
import style from './style'

export default function MenuLanding(){

    const { openModal, displayModal, activateScroll, uName, exitSession } = useUI()

    useEffect( () => {
        activateScroll(displayModal)
    },[displayModal])

    const handlerLogout = ()=>{
        logout().then( exitSession() )
    }

    const nameOrLogin = uName === '' ? (
        <button 
            className='btn-shine'
            onClick={openModal}
        >
            Login
        </button>
    ) 
    : <div>{uName} - <button onClick={handlerLogout}>Salir</button></div>
    

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
                            <a href='#welcome'>INICIO</a>
                        </li>
                        <li>
                            <a href='#beneficios'>BENEFICIOS</a>
                        </li>
                        <li>
                            { nameOrLogin }
                        </li>
                    </ul>
                    <SandwichBtn handlerClick={openModal}/>
                </div>
            </div>
            <style jsx>{style}</style>
        </nav>
    )
}