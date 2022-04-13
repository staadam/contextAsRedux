import { useContext } from "react"
import { selectFromState } from "../helpers/selectFromState";
import { StateContext } from "../store/store";

export const useContextState = (stateNames=['text']) => {
    const state = useContext(StateContext);
    return selectFromState(stateNames, state)
}