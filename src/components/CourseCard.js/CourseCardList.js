import React,{useState} from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

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
const courses = [
    {
      title: 'Web Development Bootcamp',
      description: 'Learn web development from scratch and build real-world projects.',
      image: 'https://via.placeholder.com/300x200',
      fee: '$500',
      location: 'Online',
      duration: '12 weeks',
      level: 'Beginner',
      prerequisites: 'None',
      syllabus: [
        'Introduction to HTML and CSS',
        'JavaScript fundamentals',
        'React and Redux',
        'Node.js and Express',
        'Database design and management',
        'Building and deploying web applications',
      ],
    },
    {
      title: 'Data Science with Python',
      description: 'Learn data science with Python and work on real-world projects.',
      image: 'https://via.placeholder.com/300x200',
      fee: '$600',
      location: 'Online',
      duration: '16 weeks',
      level: 'Intermediate',
      prerequisites: 'Python programming',
      syllabus: [
        'Introduction to data science',
        'Data analysis with Pandas',
        'Data visualization with Matplotlib and Seaborn',
        'Machine learning with Scikit-learn',
        'Deep learning with TensorFlow',
        'Building and deploying data-driven applications',
      ],
    },
    // Add more courses here...
  ];

const CourseCardList = ({ searchKeyword }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLevel, setFilterLevel] = useState('');
  
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const handleFilterLevelChange = (event) => {
        setFilterLevel(event.target.value);
      };
    
      const filteredCourses = courses.filter((course) => {
        const titleMatch = course.title.toLowerCase().includes(searchKeyword.toLowerCase());
        const location = course.location.toLowerCase().includes(searchKeyword.toLowerCase());
        const levelMatch = filterLevel === '' || course.level === filterLevel;
        return (titleMatch || location) && levelMatch ;
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
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </CardListContainer>
    </>
  );
};

export default CourseCardList;