import { useUI } from "context/UIcontext";
import Login from "components/login"

const ModalView = () => {
    const { displayModal } = useUI();

    return displayModal ? <Login/> : null
}


export const UiWindows = ({children})=>{
    return(
        <>
            <ModalView/>
            {children}
        </>
    )
}