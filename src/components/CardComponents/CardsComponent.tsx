import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardComponent from './CardComponent'; 
import { Card, Reshuffledcard } from '../../types'; 

interface CardsContainerProps {
  cards: Card[];
  handleReShuffles: (card: Reshuffledcard, action: string) => void;
}

const Container = styled.div`
  display: grid;
  gap: 3%;
  width: 100%;
  margin: 0px auto;
  grid-template-columns: repeat(5, auto); 
  grid-auto-rows: auto; 
  justify-content: center;
  box-sizing: border-box;
  height: 39vw;
  padding: 10px;
`;

const CardsComponent: React.FC<CardsContainerProps> = ({ cards, handleReShuffles }) => {
  const [reRender, setReRender] = useState(false);
  useEffect(() => {
    setReRender((prev) => !prev)
  },[cards])
  return (
    <Container>
      {cards.map((card, index) => (
        <CardComponent card={card} key={index} reRender={reRender} handleReShuffles={handleReShuffles} />
      ))}
    </Container>
  );
};

export default CardsComponent;