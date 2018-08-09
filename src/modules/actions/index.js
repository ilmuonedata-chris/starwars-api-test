import * as t from '../types';
import axios from 'axios';

export const fetchFilms = () => {
  return dispatch => {
    axios.get('https://swapi.co/api/films/')
    .then(response => {
      console.log('response', response);
      dispatch(setFilms(response.data.results));
    })
    .catch(error => {
      console.log('error', error);
    });
    
  }
}

export const getFilmDetail = (filmIndex) => {
  return dispatch => {
    axios.get(`https://swapi.co/api/films/${filmIndex}/`)
    .then(response => {
      console.log('response', response);
      dispatch(setFilmDetail(response.data));
    })
    .catch(error => {
      console.log('error', error);
    });
    
  }
}

export const putPageLocation = (page) => {
  return dispatch => {
    dispatch(setPageLocation(page));
  }
}

export const setPageLocation = (page) => {
  return {
    type: t.SET_PAGE_LOCATION,
    payload: {
      page
    }
  };
}


export const setFilmDetail = (filmDetail) => {
  return {
    type: t.GET_FILM_DETAIL,
    payload: {
      filmDetail
    }
  };
}

export const setFilms = (films) => {
  return {
    type: t.FETCH_FILMS,
    payload: {
      films
    }
  };
}