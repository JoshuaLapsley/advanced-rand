import { Card, CardType } from "../../types";

export const categories = ["Expansion", "Cost", "Card Type"];

export const expansions = ["Base Set"];

export const costs = ["1", "2", "3", "4", "5", "6"];

export const cardTypes = [
  "Village", "Drawer", "Trasher", "Payload", "Cantrip", "Draw-to-x", 
  "Gainer", "Victory", "Sifter", "Treasure", "Attack", "Reaction", 
  "Throne", "Junker",
];

export const isValidCardFromParam = (card: Card, param?: string): Boolean => {
  if(!param) {
    return true;
  }
  if(param === "none") {
    return false;
  }

  const cardTypesLowercase = cardTypes.map(type => type.toLowerCase().trim()); //This just makes it so we can search for param, We don't set it originally as lowercase because we display the words
  const expansionsLowercase = expansions.map(type => type.toLowerCase().trim());
  param = param.toLowerCase().trim();
  

  if(expansionsLowercase.includes(param)) {return card.set.toLowerCase() === param}
  if(costs.includes(param)) {return card.cost === Number(param)}
  if(cardTypesLowercase.includes(param)) {return card.cardTypes.includes(param as CardType)}
  return false;
}

export const getCorrectParamArray = (param: string) => {
  
}