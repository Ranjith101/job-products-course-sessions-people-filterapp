import { useState, useEffect, createContext } from 'react';
import jobsData from '../data/jobsData';

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [allJobs, setAllJobs] = useState(jobsData.map(job => ({ ...job, show: true })));
  const [filters, setFilters] = useState([]);
  // const [allCourses, setAllCourses] = useState(courseData.map(course => ({ ...course, show: true })));
  const removeFilter = filterObj => {
    const updatedFilters = filters.filter(filter => filter.id !== filterObj.id);
    setFilters(updatedFilters);
  };

  const addFilter = text => {
    const isAlreadySelected = filters.some(filter => filter.text === text);
    if (!isAlreadySelected) {
      const newFilter = {
        id: new Date().getTime(),
        text,
      };
      setFilters(prevFilters => [...prevFilters, newFilter]);
    }
    return false;
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    const filterTexts = filters.map(filter => filter.text);
    const updatedJobs = allJobs.map(job => {
      const textsToCompare = [
        job.role,
        job.level,
        ...job.languages,
        ...job.tools,
        job.new && 'New',
        job.featured && 'Featured',
      ];

      if (filterTexts.every(filterText => textsToCompare.includes(filterText))) {
        return { ...job, show: true };
      } else {
        return { ...job, show: false };
      }
    });

    // const updatedCourse = allCourses.map(course => {
    //   const textsToCompare = [
    //     course.college,
    //     course.course_duration,
    //     course.course_fee,
    //     course.course_title

    //   ];

    //   if (filterTexts.every(filterText => textsToCompare.includes(filterText))) {
    //     return { ...course, show: true };
    //   } else {
    //     return { ...course, show: false };
    //   }
    // });


    // setAllCourses(updatedCourse);
    setAllJobs(updatedJobs);
  }, [filters]);

  return (
    <Context.Provider
      value={{
        allJobs,
        setAllJobs,
        // allCourses,
        // setAllCourses,
        filters,
        setFilters,
        removeFilter,
        addFilter,
        clearAllFilters,
      }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
