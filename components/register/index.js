import { useUI, MODAL_VIEW } from "context/UIcontext"

export default function Register(){

    const { setModalView } = useUI()

    const changeToLogin = () => {
        setModalView(MODAL_VIEW.login)
    }

    return(
        <div>
            Modal pa registro
            <button onClick={changeToLogin}> Ya tengo cuenta, iniciar sesión </button>
        </div>
    )
}