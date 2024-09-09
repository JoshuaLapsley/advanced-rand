import React, { useState } from 'react';

import ThreeWaySwitch from './ThreeWaySwitch';
import DifficultyList from './ListComponents/DifficultyList';
import styled from 'styled-components';
import ExpansionsList from './ListComponents/ExpansionsList';
import FeaturesList from './ListComponents/FeaturesList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  width: 80%;
  margin: 10px auto;
`;

const SwitchAndLists: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("Expansions");
    const [selectedDifficulties, SetselectedDifficulties] = useState(["10"] as string[]);
    const [selectedExpansions, setSelectedExpansions] = useState(["Base Set Edition 2"] as string[]);
    const [selectedMechanics, setSelectedMechanics] = useState([] as string[]);

    const options = ['Expansions', 'Difficulty', 'Mechanics'];

  return (
    <Container>
        <ThreeWaySwitch options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        {selectedOption === "Expansions" && <ExpansionsList selectedItems={selectedExpansions} setSelectedItems={setSelectedExpansions}/>}
        {selectedOption === "Difficulty" && <DifficultyList selectedItems={selectedDifficulties} setSelectedItems={SetselectedDifficulties}/>}
        {selectedOption === "Mechanics" && <FeaturesList selectedItems={selectedMechanics} setSelectedItems={setSelectedMechanics}/>}
    </Container>
  );
};

export default SwitchAndLists;
