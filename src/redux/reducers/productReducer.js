import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    products: [
        {
            id: 1,
            title: "product1",
            category: "category1"
        }
    ]
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state    
        default:
            return state
           
    }
}


