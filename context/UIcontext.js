import React, { useCallback, useMemo } from 'react'

const initialstate = {
    displayModal : false,
    loged : false
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
            return {
                ...state,
                loged: true,
              }
        }
        case 'logout' : {
            return {
                ...state,
                loged: false,
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

    const loginSuccess = useCallback( () => { 
        dispatch( { type: 'login-susscessful' } )
    }, [dispatch]) 

    const logout = useCallback( () => { 
        dispatch( { type: 'logout' } )
    }, [dispatch]) 

    const value = useMemo(
        () => ({
          ...state,
          openModal,
          closeModal,
          loginSuccess,
          logout
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