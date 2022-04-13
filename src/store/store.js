import React from "react";

export const StateContext = React.createContext()
export const ActionContext = React.createContext()

export const reducer = (state, action) => {
    switch(action.type){
        case "CHANGE_TEXT": return {...state, text: action.payload};
        default: return state;
    }
}