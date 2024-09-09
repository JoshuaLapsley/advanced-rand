import React from 'react';
import ListItems from './ListItems';

interface FeaturesListProps {
  selectedItems: string[],
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const featuresList = [
    "Potions", 
    "Durations",
    "Victory Tokens", 
    "Ruins / Spoils",
    "Coffers / Villagers", 
    "Reserve Cards", 
    "Events", 
    "Travellers", 
    "Debt", 
    "Landmarks", 
    "Night Cards",
    "Heirlooms",
    "Boons / Vexes",
    "Projects",
    "Artifacts",
    "Exile",
    "Horses",
    "Ways",
    "Favors",
    "Rotating Piles",
    "Traits",
    "Loots",
    "Prophecies",
    "Shadows"
];

const FeaturesList: React.FC<FeaturesListProps> = ({ selectedItems, setSelectedItems }) => {

  return (
    <ListItems 
        items={featuresList} 
        oneAtATime={false} 
        selectedItems={selectedItems} 
        setSelectedItems={setSelectedItems}
        selectAllButton
    />
  );
};

export default FeaturesList;
