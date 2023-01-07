import {types} from "../types/types";

const initialState = {
    value: 0,
    users:[]
}

export default function usersReducer(state = initialState , action){
    switch (action.type){
        case types.VALUE:
            return{...state, value:action.payload}
        case types.ADD_USER:
            return {...state,users: [...state.users , action.payload] , value: []}
        case types.CLEAR_ALL:
            return {...state, users: [] ,value: []}
        default:return state
    }
}