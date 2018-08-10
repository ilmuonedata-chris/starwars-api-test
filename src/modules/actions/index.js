import * as t from '../types';
import axios from 'axios';

export const fetchFilms = () => {
  return dispatch => {
    axios.get('https://swapi.co/api/films/')
    .then(response => {
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
      dispatch(setFilmDetail(response.data));
      dispatch(getBatchDetails('characters', response.data.characters));
      dispatch(getBatchDetails('planets', response.data.planets));
      dispatch(getBatchDetails('starships', response.data.starships));
    })
    .catch(error => {
      console.log('error', error);
    });
    
  }
}

export const getBatchDetails = (fieldType, batchDetails) => {
  return dispatch => {
    let promises = batchDetails.map(url => {
      return new Promise((resolve, reject) => {
        axios.get(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          console.log('error', error);
          reject(error);
        });
      });
    });

    Promise.all(promises).then(results => {
      dispatch(setBatchFields(fieldType, results));
    })
  }
}

export const putPageLocation = (page) => {
  return dispatch => {
    dispatch(setPageLocation(page));
  }
}

export const unmountData = (fieldName) => {
  return dispatch => {
    dispatch({
      type: t.UNMOUNT_DATA,
      fieldName
    });
  }
}

export const unmountDetails = () => {
  return dispatch => {
    dispatch({
      type: t.UNMOUNT_FILM_DETAILS,
    });
  }
}

const setBatchFields = (fieldName, fieldDetails) => {
  return {
    type: t.GET_BATCH_DETAILS,
    fieldName,
    payload: {
      fieldDetails
    }
  };
}

const setPageLocation = (page) => {
  return {
    type: t.SET_PAGE_LOCATION,
    payload: {
      page
    }
  };
}

const setFilmDetail = (filmDetail) => {
  return {
    type: t.GET_FILM_DETAIL,
    payload: {
      filmDetail
    }
  };
}

const setFilms = (films) => {
  return {
    type: t.FETCH_FILMS,
    payload: {
      films
    }
  };
}