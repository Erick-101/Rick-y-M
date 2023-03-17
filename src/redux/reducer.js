import { GET_ALL_CHARACTERS } from "./action-types";

const initialState = {
    characters: [],
    characterDetail: {}
}


const reducer = (state = initialState, action) => { // {type: GET_ALL_CHARACTERS, payload: response.data.results}
    switch(action.type){
        case GET_ALL_CHARACTERS: 
            return {
                ...state,
                characters: action.payload // [{}, {}, {}]
            }

        default:
            return {...state}
    }
}


export default reducer;