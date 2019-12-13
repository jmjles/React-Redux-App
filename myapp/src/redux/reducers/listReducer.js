import {FETCH_FILMS} from '../actions/types'

const initState = {
    films:[]
}
export const listReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_FILMS:
            return {
                ...state,
                films: action.data
            }
        default:
            return state
    }
}