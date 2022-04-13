import { useReducer } from "react"
import { reducer } from "./store"
import { ActionContext, StateContext } from "./store"

const initialState = {
    text:'treść'
}

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const actions = {
        changeText:(newState)=>{
            dispatch({
                type: "CHANGE_TEXT",
                payload: newState,
            })
        }
    }
    
    return (
        <StateContext.Provider value={state}>
            <ActionContext.Provider value={actions}>
                {children}
            </ActionContext.Provider>
        </StateContext.Provider>
    )
}