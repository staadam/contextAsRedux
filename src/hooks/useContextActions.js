import { useContext } from "react"
import { selectFromState } from "../helpers/selectFromState";
import { ActionContext } from "../store/store";

export const useContextActions = (actionsNames=['changeText']) => {
    const actions = useContext(ActionContext);
    return selectFromState(actionsNames, actions);
}