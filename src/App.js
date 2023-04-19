
import CourseCardList from './components/CourseCard.js/CourseCardList';
import PeopleList from './components/People/PeopleList';
import ProductList from './components/ProductList/ProductList';
import SessionList from './components/SessionList/SessionList';
import JobList from './components/Jcard/Jobcard';


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { DecoImage, JobCardList } from './components';
import { ContextProvider } from './components/Context';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme/Themes';
import useTheme from './components/Theme/useTheme';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchBar/SearchResults';

const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  z-index: 99999;
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
  top: 50px;
  left: 46rem;
  width: 150px;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 0 0 10px 10px;
  padding: 5px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: ${({ open }) => (open ? 'block' : 'none')};
  background: aqua;
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
  const [theme, toggleTheme] = useTheme();
  const [activeDropdown, setActiveDropdown] = useState('Courses');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownItemSelect = (item) => {
    setActiveDropdown(item);
    setDropdownOpen(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filterItems = (items, query) => {
    if (!Array.isArray(items)) {
      return [];
    }
    return items.filter((item) => {
      const title = item.title.toLowerCase();
      const company = item.company ? item.company.toLowerCase() : '';
      const description = item.description ? item.description.toLowerCase() : '';
      const search = query.toLowerCase();
      return title.includes(search) || company.includes(search) || description.includes(search);
    });
  };
  const filteredCourses = filterItems(CourseCardList, searchQuery);
  const filteredPeople = filterItems(PeopleList, searchQuery);
  const filteredProducts = filterItems(ProductList, searchQuery);
  const filteredSessions = filterItems(SessionList, searchQuery);
  const filteredJobs = filterItems(JobList, searchQuery);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ContextProvider>
        <GlobalStyles />
        <DecoImage theme={theme} toggleTheme={toggleTheme} />
        <SearchBar onSearch={handleSearch} />
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

        {searchQuery ? (
  <SearchResults
  courses={filteredCourses}
  people={filteredPeople}
  products={filteredProducts}
  sessions={filteredSessions}
  jobs={filteredJobs}
/>
) : (
  <>
    {activeDropdown === 'Jobs' ? <JobList /> : null}
    {activeDropdown === 'Courses' ? <CourseCardList /> : null}
    {activeDropdown === 'People' ? <PeopleList /> : null}
    {activeDropdown === 'Products' ? <ProductList /> : null}
    {activeDropdown === 'Sessions' ? <SessionList /> : null}
  </>
)}

</ContextProvider>
</ThemeProvider>
);
};

export default App;
    