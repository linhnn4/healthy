import React, { useState } from 'react';
import Container from 'components/Container';

import Recommended from './Recommended';
import RecommendedItems from './RecommendedItems';

const Home = () => {
  const [selectedType, setSelectedType] = useState('COLUMN');
  return (
    <Container>
      <div style={{ maxWidth: 960, margin: '58px auto' }}>
        <Recommended setSelectedType={setSelectedType} />
        <RecommendedItems selectedType={selectedType} />
      </div>
    </Container>
  );
};

export default Home;
