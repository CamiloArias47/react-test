import Img from 'next/image'
import logoMenu from 'public/images/logos/logo-menu.svg'
import SandwichBtn from './sandwichbtn'
import style from './style'

export default function Menu(){
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
                            <a className='btn-shine'>Login</a>
                        </li>
                    </ul>
                    <SandwichBtn />
                </div>
            </div>
            <style jsx>{style}</style>
        </nav>
    )
}