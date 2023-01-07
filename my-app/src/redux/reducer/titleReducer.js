
import {types} from "../types/types";


const initialState = {
    title:"Old title"
}


export default function titleReducer  (state = initialState , action){
    switch (action.type){
        case types.CHANGE_TITLE:
            return{...state,title: "New Title"}
        case types.WITH_PARAMS:
            return {...state,title: action.payload}
        default: return state
    }



}