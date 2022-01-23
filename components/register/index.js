import { useState } from "react"
import { useUI, MODAL_VIEW } from "context/UIcontext"
import { register } from "firebaseconf/auth/register"
import style from 'styles/style-modal-form'

export default function Register(){
    const [ mail, setMail] = useState('')
    const [ password, setPassword] = useState('')
    const [ verifyPass, setVerifyPass] = useState('')
    const [ error, setError] = useState('')

    const { setModalView, closeModal, loginSuccess} = useUI()

    const changeToLogin = () => {
        setModalView(MODAL_VIEW.login)
    }

    const handlerInput = event => {
        const field = event.target.name
        const value = event.target.value

        if(field === 'register-mail') setMail(value)
        if(field === 'register-password') setPassword(value)
        if(field === 'register-verifyPass') setVerifyPass(value)
    }

    const handlerSubmit = event => {
        event.preventDefault()
        if(password === verifyPass && password !== ''){
            const dUser = {email : mail, password}
            register(dUser)
                .then( user => {
                    console.log({user})
                    loginSuccess({user})
                    closeModal()
                })
                .catch( err => {
                    console.log({err})
                    setError(err.message)
                })
        }
        else{
            setError('Las contraseñas no coinciden')
        }
    }

    return(
        <div className="modal-content">
            <span className='title'>Regístrate</span>
            <form onSubmit={handlerSubmit}>
                <input type="text" id="register-mail" name="register-mail" value={mail} onChange={handlerInput} placeholder="Email" required/>
                <input type="password" id="register-password" name="register-password" value={password} onChange={handlerInput} placeholder="password" required/>
                <input type="password" id="register-verifyPass" name="register-verifyPass" value={verifyPass} onChange={handlerInput}  placeholder="confirmar contraseña" required/>
                <button className='btn-primary'>Crear cuenta</button>
            </form>
            { error != '' ? 
                <span className="error-message">{error}</span> 
                : ''}

            <div className='modal-footer'>
                <div className="modal-footer-bootom">
                    <a onClick={changeToLogin}> Ya tengo cuenta, iniciar sesión </a>      
                </div>
            </div>

            <style jsx>{ style }</style>
        </div>
    )
}