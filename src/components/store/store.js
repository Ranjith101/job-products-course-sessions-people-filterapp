import { createStore } from 'redux';

const initialState = {
  searchQuery: '',
  filteredCourses: [],
  filteredJobs: [],
  filteredPeople: [],
  filteredProducts: [],
  filteredSessions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'SET_FILTERED_COURSES':
      return {
        ...state,
        filteredCourses: action.payload,
      };
    case 'SET_FILTERED_JOBS':
      return {
        ...state,
        filteredJobs: action.payload,
      };
    case 'SET_FILTERED_PEOPLE':
      return {
        ...state,
        filteredPeople: action.payload,
      };
    case 'SET_FILTERED_PRODUCTS':
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case 'SET_FILTERED_SESSIONS':
      return {
        ...state,
        filteredSessions: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;