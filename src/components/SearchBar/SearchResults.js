import React from 'react';
// import JobCardList from '../JobCardList/JobCardList';
import JobList from '../Jcard/Jobcard';
import CourseCardList from '../CourseCard.js/CourseCardList';
import PeopleList from '../People/PeopleList';
import ProductList from '../ProductList/ProductList';
import SessionList from '../SessionList/SessionList';

const SearchResults = ({ searchQuery }) => {
  const jobResults = JobList.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const courseResults = CourseCardList.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const peopleResults = PeopleList.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const productResults = ProductList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sessionResults = SessionList.filter((session) =>
    session.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const results = [ ...jobResults,...courseResults, ...peopleResults, ...productResults, ...sessionResults];

  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
};

export default SearchResults;