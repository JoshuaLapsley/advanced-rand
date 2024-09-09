import styled from 'styled-components';
import React from 'react';

interface ArticleProps {
  isSelected: boolean;
}

interface ListItemProps {
  content: string;
  isSelected: boolean;
  onSelect: () => void;
}

const Article = styled.article<ArticleProps>`
  width: 70%;
  aspect-ratio: 1 / 1;
  margin: 5px;
  float: left;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: ${({ isSelected }) => (isSelected ? '#FF8C00' : '#e0e0e0')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  text-align: center;
  line-height: 1;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ListItem: React.FC<ListItemProps> = ({ content, isSelected, onSelect }) => {
  return (
    <Article isSelected={isSelected} onClick={onSelect}>
      {content}
    </Article>
  );
};

export default ListItem;