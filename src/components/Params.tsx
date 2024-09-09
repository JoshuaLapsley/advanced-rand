import React, { useState } from 'react';
import styled from 'styled-components';
import { cardTypes, categories, costs, expansions } from './utils/paramUtils';

interface ParamsProps {
  onClose: () => void;
  setOverlay: (item: string) => void;
}

const ParamContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 12vw;
  left: 0;
  overflow: hidden;
  z-index: 1;
  position: absolute;

`;

const ParamItem = styled.li`
  padding: 1vw;
  cursor: pointer;
  font-size: 1.5vw;
  background-color: 'white';

  &:hover {
    background-color: lightblue;
  }
`;

const Params: React.FC<ParamsProps> = ({onClose, setOverlay}) => {

  const [dropdownParams, setDropDownParams] = useState(categories)

  const changeSelected = (item: string) => {
    setOverlay(item);
    onClose();
  };

  const getListByKeyword = (keyword: string) => {
    if(keyword === "Expansion") {
      return expansions;
    } else if (keyword === "Cost") {
      return costs;
    } else {
      return cardTypes;
    }
  }

  const handleClick = (item: string) => {
    if(categories.includes(item)) {
      setDropDownParams(getListByKeyword(item))
    } else {
      changeSelected(item)
    }
  }

  return (
    <ParamContent id="sus">
      {dropdownParams.map((item) => (
        <ParamItem
          key={item}
          onClick={() => handleClick(item)}
        >
          {item}
        </ParamItem>
      ))}
    </ParamContent>
  );
};

export default Params;