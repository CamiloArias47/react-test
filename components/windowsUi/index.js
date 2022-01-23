import { useUI, MODAL_VIEW } from "context/UIcontext";
import Modal from "components/windowsUi/modal"
import Login from "components/login"
import Register from "components/register";

const ModalView = () => {
    const { displayModal, modalView } = useUI();

    return displayModal ? (
        <Modal>
            { modalView === MODAL_VIEW.login    && <Login /> }
            { modalView === MODAL_VIEW.register && <Register/> }
        </Modal>
    ) 
    : null
}


export const UiWindows = ({children})=>{
    return(
        <>
            <ModalView/>
            {children}
        </>
    )
}