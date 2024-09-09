import React from 'react';
import styled from 'styled-components';

interface ThreeWaySwitchProps {
    options: string[];
    selectedOption: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonGroup = styled.div`
  display: flex;
  width: 60%;
  aspect-ratio: 1 / 0.1;
  margin: 0 auto;
  justify-content: center;
`;

const Button = styled.button<{ isSelected: boolean }>`
  padding: 10px 20px;
  background-color: ${({ isSelected }) => (isSelected ? '#3cb371' : '#f0f0f0')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#333')};
  border: ${({ isSelected }) => (isSelected ? '1px solid black' : '1px solid #ccc')};
  border-radius: 5px;
  font-size: 2vw;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#2e8b57' : '#e0e0e0')};
  }
`;

const ThreeWaySwitch: React.FC<ThreeWaySwitchProps> = ({options, selectedOption, setSelectedOption}) => {

  return (
    <ButtonGroup>
      {options.map((option) => (
        <Button
          key={option}
          isSelected={selectedOption === option}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ThreeWaySwitch;