import { useUI } from "context/UIcontext";

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