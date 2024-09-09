import React, { useState } from 'react';
//import CardsAndRandomizeButton from './CardsAndRandomizeButton';

import SwitchAndLists from './SwitchAndLists';
import CardsAndRandomizeButton from './CardsAndRandomizeButton';
import RandomizeButton from './randomizeButton';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 0 auto;
  height: auto;
  box-sizing: border-box;
`;

const CardsAndLists: React.FC = () => {

  const [checkIfButtonWasPressed, setCheckIfButtonWasPressed] = useState(false);

  const toggleCheckIfButtonWasPressed = () => {
    setCheckIfButtonWasPressed((prev) => !prev)
  }

  return (
    <>
    <CardsAndRandomizeButton checkIfButtonWasPressed={checkIfButtonWasPressed}/>
    <Container>
      <RandomizeButton onClick={toggleCheckIfButtonWasPressed} />
    </Container>
    <SwitchAndLists />
    </>
  );
};

export default CardsAndLists;
