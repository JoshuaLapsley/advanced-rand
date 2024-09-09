import React, { useEffect, useState } from 'react';
import { baseCards } from '../Base-Set/Cards';
import CardsComponent from './CardComponents/CardsComponent';
import RandomizeButton from './randomizeButton';
import styled from 'styled-components';
import { shuffleDeck } from './utils/shuffleDeck';
import { Card, Reshuffledcard } from '../types';
import { BlankCard } from './utils/BlankCard';
import { isValidCardFromParam } from './utils/paramUtils';

interface CardsAndRandomizeButtonProps {
  checkIfButtonWasPressed: boolean;
}

const Container = styled.div`
  display: flex;
  width: 65%;
  margin: 0 auto;
  height: auto;
  box-sizing: border-box;
`;

const CardsAndRandomizeButton: React.FC<CardsAndRandomizeButtonProps>= ({ checkIfButtonWasPressed }) => {

  const [shuffledDeck, setShuffledDeck] = useState(baseCards);
  const [kingdom, setKingdom] = useState(baseCards);
  const [reShuffledCards, setReShuffledCards] = useState<Reshuffledcard[]>([]);

  useEffect(() => {
    shuffleCards()
  },[checkIfButtonWasPressed])

  const shuffleCards = () => {
    setShuffledDeck(shuffleDeck(shuffledDeck))

    let newKingdom = [] as Card[];
    let foundACardToReplace = false;
    for(let i = 0; i < 10; i++) {
      if(isCardBeingReShuffled(reShuffledCards, kingdom[i])) {
        const paramBeingChecked = getParamByCard(reShuffledCards, kingdom[i]);
        for(let i = 0; i < shuffledDeck.length; i++) {
          if(isValidCardFromParam(shuffledDeck[i], paramBeingChecked) && !kingdom.includes(shuffledDeck[i]) && !newKingdom.includes(shuffledDeck[i])) {
            newKingdom.push(shuffledDeck[i]);
            foundACardToReplace = true;
            break;
          }
        }
        foundACardToReplace ? foundACardToReplace = false : newKingdom.push(BlankCard); //If no avalible cards, show a blank card
      } else {
        newKingdom.push(kingdom[i])
      }
    }
    setKingdom(newKingdom);
    setReShuffledCards([]);
  }
  const shuffleAllCards = () => {
    
    setShuffledDeck(shuffleDeck(shuffledDeck))
    let shuffledCards = [];
    for(let i = 0; i < 10; i++) {
      shuffledCards.push(shuffledDeck[i])
    }
    setKingdom(shuffledCards);
  }
  const isCardBeingReShuffled = (cards: Reshuffledcard[], card: Card) => {
    for(let i = 0; i<cards.length; i++) {
      if(cards[i].card === card) {
        return true;
      }
    }
    return false;
  }
  const removeCardFromListOfReshuffles = (cards: Reshuffledcard[], card: Card) => {
    for(let i = 0; i<cards.length; i++) {
      if(cards[i].card === card) {
        cards.splice(i, 1);
      }
    }
  }
  const getParamByCard = (reShuffledCards: Reshuffledcard[], card: Card) => {
    for(let i = 0; i<reShuffledCards.length; i++) {
      if(reShuffledCards[i].card === card) {
        return reShuffledCards[i].param
      }
    }
    return "none"
  }
  const handleReShuffles = (card: Reshuffledcard, action: string) => { // Function being passed down to card component
    let currentReShuffledCards = reShuffledCards;
    if(action === "add") {
      if(isCardBeingReShuffled(reShuffledCards, card.card)) {
        removeCardFromListOfReshuffles(reShuffledCards, card.card)
      }
      currentReShuffledCards.push(card);
    } else if (action === "remove") {
      removeCardFromListOfReshuffles(reShuffledCards, card.card)
    }
    setReShuffledCards(currentReShuffledCards);
  };

  useEffect(() => {
    shuffleAllCards()
  },[])
  

  return (
    <Container>
      <CardsComponent cards={kingdom} handleReShuffles={handleReShuffles} />
    </Container>
      
  );
};

export default CardsAndRandomizeButton;
