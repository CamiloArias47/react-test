import { useUI, MODAL_VIEW} from 'context/UIcontext'
import Image from 'next/image'
import {loginGoogle} from 'firebaseconf/auth/login-google'
import googleLogo from 'public/images/logos/google.svg'
import style from './style'

export default function Login(){

    const { closeModal, loginSuccess, setModalView } = useUI()

    /**Google loguin */
    const handlerLogin = () => {
        loginGoogle()
            .then( result => { 
                loginSuccess({user:result.user})
                closeModal()
            })
            .catch( error => {
                console.log({error})
            })
    }

    const changeToRegister = () => {
        setModalView(MODAL_VIEW.register)
    }


    return (
        <div className="login-window">
                <button onClick={closeModal}>cerrar</button>

                <button onClick={handlerLogin}>
                    <Image src={googleLogo} alt="Login con Google"/>
                </button>

                <button onClick={changeToRegister}>
                    Registrate
                </button>
            <style jsx>{ style }</style>
        </div>
    )
}