import {types} from "../types/types";




 export const changeTitleAction = () => {
    return{
        type: types.CHANGE_TITLE
    }
}

export const withParamsAction = (title)=> {
     return{
         type: types.WITH_PARAMS,
         payload:title
     }
}

export const setValue = (value) => {
     return{
         type:types.VALUE,
         payload:value
     }
}

export const adduserAction = () => {
     return{
         type: types.ADD_USER,
         payload: name
     }
}

export const clearAll = () => {
     return{
         type:types.CLEAR_ALL
     }
}