import {FETCH_FILMS} from './types'
const axios = require('axios')
export const fetchFilms = () => async dispatch => {
    const res = await axios("https://ghibliapi.herokuapp.com/films/");
    const data = res.data
    dispatch({
        type:FETCH_FILMS,
        data
    })
}