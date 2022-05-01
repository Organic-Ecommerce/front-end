import { Action } from "./actions";


//Param
export interface UserState {
    tokens: string,
    id: string,
}

//condition
const initialState = {
    tokens: "",
    id: ""
}

//Function structure
export const userReducer = (state: UserState = initialState, action: Action) => {
    switch (action.type){
        case "ADD_TOKEN" : {
            return {tokens: action.payload, id: state.id}//acttion updated, state updated
        }
        case "ADD_ID": {
            return {id: action.payload, tokens: state.tokens}
        }
        default:
            return state
    }
}