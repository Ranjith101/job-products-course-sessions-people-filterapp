export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
  });
  
  export const setFilteredCourses = (courses) => ({
    type: 'SET_FILTERED_COURSES',
    payload: courses,
  });
  
  export const setFilteredJobs = (jobs) => ({
    type: 'SET_FILTERED_JOBS',
    payload: jobs,
  });
  
  export const setFilteredPeople = (people) => ({
    type: 'SET_FILTERED_PEOPLE',
    payload: people,
  });
  
  export const setFilteredProducts = (products) => ({
    type: 'SET_FILTERED_PRODUCTS',
    payload: products,
  });
  
  export const setFilteredSessions = (sessions) => ({
    type: 'SET_FILTERED_SESSIONS',
    payload: sessions,
  });