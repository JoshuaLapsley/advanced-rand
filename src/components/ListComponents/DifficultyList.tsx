import React from 'react';
import ListItems from './ListItems';

const difficultyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

interface DifficultyListProps {
  selectedItems: string[],
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const DifficultyList: React.FC<DifficultyListProps> = ({ selectedItems, setSelectedItems }) => {


  return (
    <ListItems 
        items={difficultyList} 
        oneAtATime={true} 
        selectedItems={selectedItems} 
        setSelectedItems={setSelectedItems}
    />
  );
};

export default DifficultyList;
