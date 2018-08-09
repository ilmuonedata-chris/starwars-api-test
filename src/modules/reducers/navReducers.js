import * as t from '../types';

const initState = {
  page: ''
}

const navReducers = (state = initState, action) => {
  switch(action.type) {
    
    case t.SET_PAGE_LOCATION :
      return {
        ...state, 
        page: action.payload.page
      }
    
    default :
      return state
  }
}

export default navReducers;