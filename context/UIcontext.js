import React, { useCallback, useMemo } from 'react'
import userLogo from 'public/images/user.svg'
import userAvatarLoading from 'public/images/loaders/UserAvatarLoader.svg'

export const MODAL_VIEW = {
    login : 1,
    register : 2
}

const initialstate = {
    displayModal : false,
    modalView : MODAL_VIEW.login,
    loged : false,
    avtr :userAvatarLoading,
    uName : '',
    email : '',
    uid : ''
}


export const UIContext = React.createContext(initialstate)

UIContext.displayName = 'UIContext'


function uiReducer( state, action){
    switch (action.type){
        case 'open-modal' : {
            return {
                ...state,
                displayModal: true,
              }
        }
        case 'close-modal' : {
            return {
                ...state,
                displayModal: false,
              }
        }
        case 'login-susscessful' : {

            let avtr  = userLogo,
                uName = '', 
                email = '', 
                uid   = ''

            if(action.user){
                const user = action.user

                avtr  = (user.photoURL) ? user.photoURL : 'https://picsum.photos/62/62'
                uName = user.displayName ?? user.email
                email = user.email
                uid   = user.uid
            } 
            
            return {
                ...state,
                avtr,
                uName,
                email,
                uid,
                loged: true,
              }
        }
        case 'logout' : {
            return {
                ...state,
                avtr  : userLogo,
                uName : '', 
                email : '', 
                uid   : '',
                loged: false,
              }
        }
        case 'set-modal-view' : {
            return {
                ...state,
                modalView : action.view
              }
        }
    }
}

//crea proveedor context con valores y funciones 
//para modificar el estado del reducer
export const UIProvider = (props) => {
    const [state, dispatch] = React.useReducer(uiReducer, initialstate)

    const openModal = useCallback( () => { 
        dispatch( { type: 'open-modal' } )
    }, [dispatch] ) 

    const closeModal = useCallback( () => { 
        dispatch( { type: 'close-modal' } )
    }, [dispatch]) 

    const loginSuccess = useCallback( (user) => { 
        dispatch( { type: 'login-susscessful', user } )
    }, [dispatch]) 

    const exitSession = useCallback( () => { 
        dispatch( { type: 'logout' } )
    }, [dispatch]) 

    const activateScroll = useCallback( open => {
            document.getElementsByTagName("html")[0].style.overflow = (open) ? "hidden" : "auto"
        }
    )

    const setModalView = useCallback( view => {
        dispatch( { type:'set-modal-view', view})
    }, [dispatch])

    const value = useMemo(
        () => ({
          ...state,
          openModal,
          closeModal,
          loginSuccess,
          exitSession,
          activateScroll,
          setModalView
        }),
        [state]
      )

    return <UIContext.Provider value={value} {...props} />
}


//hook para usar los valores y funciones del reducer
export const useUI = () => {
    const context = React.useContext(UIContext)
    if (context === undefined) {
      throw new Error(`se debe usar un UiContextProvider primero`)
    }
    return context
}

//componente proveedor 
export const UiContextProvider = ({ children }) => (
    <UIProvider>
      { children }
    </UIProvider>
)