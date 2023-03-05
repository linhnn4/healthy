import React, { useState } from 'react';
import Container from 'components/Container';
import styled from 'styled-components';

import Achievement from './Achievement';
import BodyGraph from './BodyGraph';
import MealTypes from './MealTypes';
import Meals from './Meals';

const Wrapper = styled.div`
  .achievement-graph {
    display: flex;
  }
`;

const TopPage = () => {
  const [selectedType, setSelectedType] = useState(undefined);
  return (
    <Container>
      <Wrapper>
        <div className="achievement-graph">
          <Achievement />
          <BodyGraph />
        </div>
        <MealTypes
          setSelectedType={setSelectedType}
          selectedType={selectedType}
        />
        <Meals selectedType={selectedType} />
      </Wrapper>
    </Container>
  );
};

export default TopPage;
