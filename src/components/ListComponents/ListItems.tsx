import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';

interface ListItemsProps {
  items: string[];
  oneAtATime?: boolean;
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  selectAllButton?: boolean;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  justify-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const ListItems: React.FC<ListItemsProps> = ({ items, oneAtATime, selectedItems, setSelectedItems, selectAllButton}) => {

    const handleSelect = (item: string) => {
      setSelectedItems(prevItems => {
        let newSelectedItems = [...prevItems];
        if (oneAtATime && newSelectedItems.length > 0) {
          newSelectedItems.pop();
        }
        if (!newSelectedItems.includes(item)) {
          newSelectedItems.push(item);
        } else {
          newSelectedItems = newSelectedItems.filter(element => element !== item);
        }
        return newSelectedItems;
      });
    };

    const handleSelectAll = () => {
      selectedItems === items ? setSelectedItems([]) : setSelectedItems(items);
    }

  return (
    <GridContainer>
      {items.map((item, index) => (
        <ListItem
          key={item}
          content={item}
          isSelected={selectedItems.includes(item)}
          onSelect={() => handleSelect(item)}
        />
      ))}
      {selectAllButton && <ListItem content="Select All" isSelected={selectedItems === items} onSelect={handleSelectAll}/>}
    </GridContainer>
  );
};

export default ListItems;