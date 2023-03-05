import React from 'react';
import styled from 'styled-components';

const iconMorning = require('../../images/icons/icon_morning.png');
const iconLunch = require('../../images/icons/icon_lunch.png');
const iconDinner = require('../../images/icons/icon_dinner.png');
const iconSnack = require('../../images/icons/icon_snack.png');

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
  gap: 74px;
  .item {
    cursor: pointer;
    &.active {
      transform: scale(1.1);
    }
  }
`;

const items = [
  { type: 'Morning', image: iconMorning },
  { type: 'Lunch', image: iconLunch },
  { type: 'Dinner', image: iconDinner },
  { type: 'Snack', image: iconSnack },
];

const MealTypes = ({ setSelectedType, selectedType }) => {
  const onChangeType = React.useCallback(
    type => {
      if (type === selectedType) {
        setSelectedType(undefined);
      } else {
        setSelectedType(type);
      }
    },
    [selectedType],
  );
  return (
    <Wrapper>
      {items.map((item, idx) => (
        <div
          className={`item hover-up ${
            selectedType === item.type ? 'active' : ''
          }`}
          key={idx}
          onClick={() => onChangeType(item.type)}
        >
          <img src={item.image} alt={item.type} />
        </div>
      ))}
    </Wrapper>
  );
};

export default MealTypes;
