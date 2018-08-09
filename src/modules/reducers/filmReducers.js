import * as t from '../types';

const initState = {
  films: [],
  filmDetail: {},
}

const filmReducers = (state = initState, action) => {
  switch(action.type) {
    
    case t.FETCH_FILMS :
      return {
        ...state, 
        films: action.payload.films
      }
    
    case t.GET_FILM_DETAIL :
      return {
        ...state, 
        filmDetail: action.payload.filmDetail
      }
    
    default :
      return state
  }
}

export default filmReducers;