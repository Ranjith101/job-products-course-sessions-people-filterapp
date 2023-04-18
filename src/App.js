import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { DecoImage, JobCardList } from './components';
import { ContextProvider } from './components/Context';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme/Themes';
import useTheme from './components/Theme/useTheme';
import CourseCardList from './components/CourseCard.js/CourseCardList';
import PeopleList from './components/People/PeopleList';
import ProductList from './components/ProductList/ProductList';
import SessionList from './components/SessionList/SessionList';
// import CourseCardList from './components/JobCardList/CourseCard';

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  z-index:99999;
  position:relative
`;

const TabButton = styled.button`
  background-color: ${({ active, theme }) =>
    active ? theme.primaryColor : theme.secondaryColor};
  color: ${({ active, theme }) =>
    active ? theme.secondaryColor : theme.primaryColor};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px 10px 0 0;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }
`;


const App = () => {
  const [theme, toggleTheme] = useTheme();
  const [activeTab, setActiveTab] = useState('course');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ContextProvider>
        <GlobalStyles />
        <DecoImage theme={theme} toggleTheme={toggleTheme} />
        <TabContainer>
          <TabButton 
              active={activeTab === 'job'}
              onClick={()=>handleTabClick('job')}
          >
            Jobs
          </TabButton>
          <TabButton 
              active={activeTab === 'course'}
              onClick={()=>handleTabClick('course')}
          >
            Courses
          </TabButton>
          <TabButton 
              active={activeTab === 'products'}
              onClick={()=>handleTabClick('products')}
          >
            Products
          </TabButton>
          <TabButton 
              active={activeTab === 'sessions'}
              onClick={()=>handleTabClick('sessions')}
          >
            Sessions
          </TabButton>
          <TabButton 
              active={activeTab === 'people'}
              onClick={()=>handleTabClick('people')}
          >
            People
          </TabButton>
        </TabContainer>

        {activeTab === 'job' ? <JobCardList/>: null}
        {activeTab === 'course' ? <CourseCardList/>: null}
        {activeTab === 'people' ? <PeopleList/>: null}
        {activeTab === 'products' ? <ProductList/>: null}
        {activeTab === 'sessions' ? <SessionList/>: null}
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
