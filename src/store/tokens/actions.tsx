export type Action = {type: "ADD_TOKEN" | "ADD_ID"; payload: string}; //Actions

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token, //add dado
})

export const addId = (id: string): Action => ({
    type: "ADD_ID",
    payload: id, //add dado
})