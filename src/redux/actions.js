import { GET_ALL_CHARACTERS } from "./action-types";
import axios from "axios";

export const getAllCharacters = () => {
    return async function(dispatch){
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character/')
            return dispatch({ type: GET_ALL_CHARACTERS, payload: response.data.results })
            
        } catch (error) {
            console.log(error.message);
        }
    }
}