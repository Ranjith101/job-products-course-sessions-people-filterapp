import React, { useState } from 'react';
import styled from 'styled-components';

const SessionListContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SessionCard = styled.div`
width: calc(33.33% - 20px);
margin-bottom: 20px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

@media (max-width: 1200px) {
width: calc(50% - 20px);
}

@media (max-width: 768px) {
width: 100%;
}
`;

const SessionImage = styled.img
`
  width: 100%;
  height: 200px;
  object-fit: cover;`
;

const SessionInfo = styled.div

  `padding: 10px;`
;

const SessionTitle = styled.p

  `font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;`
;

const SessionDate = styled.p

  `font-size: 16px;
  margin-bottom: 5px;`
;

const SessionTime = styled.p

  `font-size: 16px;
  margin-bottom: 5px;`
;

const SessionSpeaker = styled.p

  `font-size: 16px;
  margin-bottom: 5px;`
;

const SearchContainer = styled.div

  `display: flex;
  align-items: center;
  margin-bottom: 20px;`
;

const SearchInput = styled.input

  `font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;`
;

const Select = styled.select

  `font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;`
;

const ViewDetailsButton = styled.button

  `font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;`
;

const PopupContainer = styled.div

  `position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;`
;

const PopupContent = styled.div

  `background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  text-align: center;`
;

const PopupCloseButton = styled.button

  `position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  padding: 5px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  cursor: pointer;`
;

const sessions = [
{
id: 1,
title: 'Session 1',
image: 'https://via.placeholder.com/300x200',
startDate: '2022-01-01',
endDate: '2022-01-01',
startTime: '10:00 AM',
endTime: '12:00 PM',
speakers: [
{
name: 'Speaker 1',
designation: 'Designation 1',
image: 'https://via.placeholder.com/150x150',
},
],
},
{
id: 2,
title: 'Session 2',
image: 'https://via.placeholder.com/300x200',
startDate: '2022-01-02',
endDate: '2022-01-02',
startTime: '2:00 PM',
endTime: '4:00 PM',
speakers: [
{
name: 'Speaker 2',
designation: 'Designation 2',
image: 'https://via.placeholder.com/150x150',
},
{
name: 'Speaker 3',
designation: 'Designation 3',
image: 'https://via.placeholder.com/150x150',
},
],
},
{
    id: 3,
    title: 'Session 3',
    image: 'https://via.placeholder.com/300x200',
    startDate: '2022-01-03',
    endDate: '2022-01-03',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    speakers: [
      {
        name: 'Speaker 4',
        designation: 'Designation 4',
        image: 'https://via.placeholder.com/150x150',
      },
    ],
  },
  {
    id: 4,
    title: 'Session 4',
    image: 'https://via.placeholder.com/300x200',
    startDate: '2022-01-04',
    endDate: '2022-01-04',
    startTime: '2:00 PM',
    endTime: '4:00 PM',
    speakers: [
      {
        name: 'Speaker 5',
        designation: 'Designation 5',
        image: 'https://via.placeholder.com/150x150',
      },
    ],
  },
  {
    id: 5,
    title: 'Session 5',
    image: 'https://via.placeholder.com/300x200',
    startDate: '2022-01-05',
    endDate: '2022-01-05',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    speakers: [
      {
        name: 'Speaker 6',
        designation: 'Designation 6',
        image: 'https://via.placeholder.com/150x150',
      },
    ],
  },
  // Add more sessions here
];

const SessionList = ({ searchKeyword }) => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  
    const handleViewDetails = (speaker) => {
      setSelectedSpeaker(speaker);
    };
  
    const handleClosePopup = () => {
      setSelectedSpeaker(null);
    };
    const filteredSessions = sessions.filter((session) =>
    session.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
    return (
        <>
          <SessionListContainer>
            {filteredSessions.map((session) => (
              <SessionCard key={session.id}>
                <SessionImage src={session.image} alt={session.title} />
                <SessionInfo>
                  <SessionTitle>{session.title}</SessionTitle>
                  <SessionDate>
                    {session.startDate} - {session.endDate}
                  </SessionDate>
                  <SessionTime>
                    {session.startTime} - {session.endTime}
                  </SessionTime>
                  {session.speakers.map((speaker) => (
                    <SessionSpeaker key={speaker.name}>
                      {speaker.name}, {speaker.designation}
                      <ViewDetailsButton onClick={() => handleViewDetails(speaker)}>
                        View Details
                      </ViewDetailsButton>
                    </SessionSpeaker>
                  ))}
                </SessionInfo>
              </SessionCard>
            ))}
          </SessionListContainer>
          {selectedSpeaker && (
            <PopupContainer>
              <PopupContent>
                <PopupCloseButton onClick={handleClosePopup}>X</PopupCloseButton>
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} />
                <h2>{selectedSpeaker.name}</h2>
                <p>{selectedSpeaker.designation}</p>
                <p>{selectedSpeaker.bio}</p>
              </PopupContent>
            </PopupContainer>
          )}
        </>
      );
    };
    
    export default SessionList;