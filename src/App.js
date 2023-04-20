import React, { useState } from 'react';
import styled from 'styled-components';
import CourseCardList from './components/CourseCard.js/CourseCardList';
import PeopleList from './components/People/PeopleList';
import ProductList from './components/ProductList/ProductList';
import SessionList from './components/SessionList/SessionList';
import JobList from './components/Jcard/Jobcard';
import E_CardList from './components/ExhibitorList/ExhbitorList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 400px;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const RadioButton = styled.input`
  // display: none;
`;

const RadioButtonLabel = styled.label`
  background-color: ${({ active, theme }) =>
    active ? theme.primaryColor : theme.secondaryColor};
  color: ${({ active, theme }) =>
    active ? theme.secondaryColor : theme.primaryColor};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

const App = () => {
  const [activeRadio, setActiveRadio] = useState('Courses');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleRadioChange = (event) => {
    setActiveRadio(event.target.value);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <RadioContainer>
        <RadioButton
          type="radio"
          id="courses"
          name="radio"
          value="Courses"
          checked={activeRadio === 'Courses'}
          onChange={handleRadioChange}
        />

        <RadioButtonLabel htmlFor="courses" active={activeRadio === 'Courses'}>
          Courses
        </RadioButtonLabel>
        <RadioButton
          type="radio"
          id="jobs"
          name="radio"
          value="Jobs"
          checked={activeRadio === 'Jobs'}
          onChange={handleRadioChange}
        />
        <RadioButtonLabel htmlFor="jobs" active={activeRadio === 'Jobs'}>
          Jobs
        </RadioButtonLabel>
        <RadioButton
          type="radio"
          id="products"
          name="radio"
          value="Products"
          checked={activeRadio === 'Products'}
          onChange={handleRadioChange}
        />
        <RadioButtonLabel htmlFor="products" active={activeRadio === 'Products'}>
          Products
        </RadioButtonLabel>
        <RadioButton
          type="radio"
          id="sessions"
          name="radio"
          value="Sessions"
          checked={activeRadio === 'Sessions'}
          onChange={handleRadioChange}
        />
        <RadioButtonLabel htmlFor="sessions" active={activeRadio === 'Sessions'}>
          Sessions
        </RadioButtonLabel>
        <RadioButton
          type="radio"
          id="people"
          name="radio"
          value="People"
          checked={activeRadio === 'People'}
          onChange={handleRadioChange}
        />
         <RadioButtonLabel htmlFor="people" active={activeRadio === 'People'}>
          People
        </RadioButtonLabel>
        <RadioButton
          type="radio"
          id="exhibitors"
          name="radio"
          value="Exhibitors"
          checked={activeRadio === 'Exhibitors'}
          onChange={handleRadioChange}
        />
         <RadioButtonLabel htmlFor="exhibitors" active={activeRadio === 'Exhibitors'}>
         Exhibitors
        </RadioButtonLabel>
        </RadioContainer>
        {activeRadio === 'Courses' ? <CourseCardList searchKeyword={searchKeyword} /> : null}
      {activeRadio === 'Jobs' ? <JobList searchKeyword={searchKeyword} /> : null}
      {activeRadio === 'Products' ? <ProductList searchKeyword={searchKeyword} /> : null}
      {activeRadio === 'Sessions' ? <SessionList searchKeyword={searchKeyword} /> : null}
      {activeRadio === 'People' ? <PeopleList searchKeyword={searchKeyword} /> : null}
      {activeRadio === 'Exhibitors' ? <E_CardList searchKeyword={searchKeyword} /> : null}
</Container>
)}
  export default App;