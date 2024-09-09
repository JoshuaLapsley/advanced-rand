import React from 'react';
import ListItems from './ListItems';

interface ExpansionsListProps {
  selectedItems: string[],
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const expansionsList = [
    "Base Set Edition 1", 
    "Base Set Edition 2", 
    "Intrigue Edition 1", 
    "Intrigue Edition 2", 
    "Seaside Edition 1", 
    "Seaside Edition 2", 
    "Alchemy", 
    "Prosperity Edition 1", 
    "Prosperity Edition 2", 
    "Hinterlands Edition 1",
    "Hinterlands Edition 2",
    "Dark Ages",
    "Cornucopia Edition 1",
    "Cornucopia Edition 2",
    "Guilds Edition 1",
    "Guilds Edition 2",
    "Adventures",
    "Empires",
    "Nocturne",
    "Renaissance",
    "Menagerie",
    "Allies",
    "Plunder",
    "Rising Sun"

];



const ExpansionsList: React.FC<ExpansionsListProps> = ({ selectedItems, setSelectedItems }) => {

  return (
    <ListItems 
        items={expansionsList} 
        oneAtATime={false} 
        selectedItems={selectedItems} 
        setSelectedItems={setSelectedItems} 
    />
  );
};

export default ExpansionsList;
