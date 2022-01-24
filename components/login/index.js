import { useState } from 'react'
import { useRouter } from 'next/router'
import { useUI, MODAL_VIEW} from 'context/UIcontext'
import Image from 'next/image'
import { loginGoogle} from 'firebaseconf/auth/login-google'
import { login } from 'firebaseconf/auth/login'
import googleLogo from 'public/images/logos/google.svg'
import style from 'styles/style-modal-form'

export default function Login(){
    const router = useRouter()
    const [ password, setPassword ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState('')

    const { closeModal, loginSuccess, setModalView } = useUI()

    /**Google login */
    const handlerLoginGoogle = () => {
        loginGoogle()
            .then( result => { handlerSuccessLogin(result.user) })
            .catch( error => {
                console.log({error})
            })
    }

    const handlerLogin = event => {
        event.preventDefault()
        if(password !== '' && email !== ''){
            login({email, password})
                .then( handlerSuccessLogin )
                .catch( error => {
                    console.log({error})
                    setError(error.message)
                })
        }
    }

    const handlerSuccessLogin = user => {
        loginSuccess(user)
        closeModal()
        router.replace("/dashboard");
    }

    const handlerInput = event => {
        const {value, name} = event.target
        if(name === 'password') setPassword(value)
        if(name === 'email') setEmail(value)
    }

    const changeToRegister = () => {
        setModalView(MODAL_VIEW.register)
    }


    return (
        <div className="modal-content">
                <span className='title'>Iniciar sesión</span>
                <form onSubmit={handlerLogin}>
                    <input type="text" id="email" name="email" value={email} onChange={handlerInput} placeholder="Email" required/>
                    <input type="password" id="password" name="password" value={password} onChange={handlerInput} placeholder="password" required/>
                    <button className='btn-primary'>Ingresar</button>
                </form>

                { error !== '' ? <span className='error-msg'>{error}</span> : ''}
                
                <div className='modal-footer'>
                    <div> O inicia sesión con Google </div>
                    <div>
                        <button onClick={handlerLoginGoogle} className='btn-google'>
                            <Image src={googleLogo} alt="Login con Google"/>
                        </button>
                    </div>
                    <div className='modal-footer-bootom'>
                       ¿No tienes cuenta aún? <a onClick={changeToRegister} > Registrate </a>
                    </div>
                </div>
            <style jsx>{ style }</style>
        </div>
    )
}