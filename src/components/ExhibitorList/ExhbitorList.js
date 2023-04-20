import React,{useState} from 'react';
import styled from 'styled-components';
import ExhibitorCard from './ExhibitorCard';

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top:2em
`;

const FilterInput = styled.input`
  font-size: 16px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const FilterSelect = styled.select`
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
const booths = [
    {
      title: 'SNSCE',
      description: 'Learn web development from scratch and build real-world projects.',
      image: 'https://via.placeholder.com/300x200',
      booth_id:1
      
    },
    {
      title: 'IIT',
      description: 'Learn data science with Python and work on real-world projects.',
      image: 'https://via.placeholder.com/300x200',
      booth_id:2
      
    },
    // Add more courses here...
  ];

const E_CardList = ({ searchKeyword }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLevel, setFilterLevel] = useState('');
  
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleFilterLevelChange = (event) => {
        setFilterLevel(event.target.value);
      };
    
      const filteredCourses = booths.filter((booth) => {
        const titleMatch = booth.title.toLowerCase().includes(searchKeyword.toLowerCase());
        const booth_id = booth.booth_id.toString().includes(searchKeyword)
         
        return titleMatch || booth_id ;
      });
  return (
    <>
      <FilterContainer>
        {/* <FilterInput
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <FilterSelect value={filterLevel} onChange={handleFilterLevelChange}>
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </FilterSelect> */}
      </FilterContainer>
      <CardListContainer>
        {filteredCourses.map((booth, index) => (
          <ExhibitorCard key={index} booth={booth} />
        ))}
      </CardListContainer>
    </>
  );
};

export default E_CardList;