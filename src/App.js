import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CourseCardList from './components/CourseCard.js/CourseCardList';
import PeopleList from './components/People/PeopleList';
import ProductList from './components/ProductList/ProductList';
import SessionList from './components/SessionList/SessionList';
import JobList from './components/Jcard/Jobcard';

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

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`;

const DropdownButton = styled.button`
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
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 0 0 10px 10px;
  padding: 5px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const DropdownItem = styled.li`
  list-style: none;
  padding: 5px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

const App = () => {
  const [activeDropdown, setActiveDropdown] = useState('Courses');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownItemSelect = (item) => {
    setActiveDropdown(item);
    setDropdownOpen(false);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <DropdownContainer>
        <DropdownButton onClick={handleDropdownClick} active={dropdownOpen}>
          {activeDropdown}
        </DropdownButton>
        <DropdownList open={dropdownOpen}>
          <DropdownItem onClick={() => handleDropdownItemSelect('Courses')}>
            Courses
          </DropdownItem>
          <DropdownItem onClick={() => handleDropdownItemSelect('Jobs')}>
            Jobs
          </DropdownItem>
          <DropdownItem onClick={() => handleDropdownItemSelect('Products')}>
            Products
          </DropdownItem>
          <DropdownItem onClick={() => handleDropdownItemSelect('Sessions')}>
            Sessions
          </DropdownItem>
          <DropdownItem onClick={() => handleDropdownItemSelect('People')}>
            People
          </DropdownItem>
        </DropdownList>
      </DropdownContainer>

      {activeDropdown === 'Jobs' ? <JobList searchKeyword={searchKeyword}/> : null}
      {activeDropdown === 'Courses' ? <CourseCardList searchKeyword={searchKeyword} /> : null}
      {activeDropdown === 'People' ? <PeopleList searchKeyword={searchKeyword} /> : null}
      {activeDropdown === 'Products' ? <ProductList searchKeyword={searchKeyword} /> : null}
      {activeDropdown === 'Sessions' ? <SessionList searchKeyword={searchKeyword}/> : null}
    </Container>
  );
};

export default App;