import React, { useState } from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin: 0 20px 20px 20px;
`;
const CardBooth = styled.p`
  font-size: 12px;
  margin: 0 20px 20px 20px;
`;
const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: aqua;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;

const PopupTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PopupText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const ExhibitorCard = ({ booth }) => {
  const {
    title,
    description,
    image,
   booth_id
  } = booth;
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardBooth>BoothId:{booth_id}</CardBooth>
        <Button>View Booth</Button>
        {/* <Button onClick={handleButtonClick}>View Details</Button> */}
      </CardContainer>
      {/* {showPopup && (
        <PopupContainer>
          <PopupContent>
            <PopupTitle>{title}</PopupTitle>
            <PopupText>Fee: {fee}</PopupText>
            <PopupText>Location: {location}</PopupText>
            <PopupText>Duration: {duration}</PopupText>
            <PopupText>Level: {level}</PopupText>
            <PopupText>Prerequisites: {prerequisites}</PopupText>
            <PopupText>Syllabus:</PopupText>
            <ul>
              {syllabus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <CloseButton onClick={handleClosePopup}>Close</CloseButton>
          </PopupContent>
        </PopupContainer>
      )} */}
    </>
  );
};

export default ExhibitorCard;