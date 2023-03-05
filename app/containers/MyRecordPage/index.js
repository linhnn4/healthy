import React from 'react';
import Container from 'components/Container';

import Sections from './Sections';
import BodyGraph from '../TopPage/BodyGraph';
import Exercises from './Exercises';
import Diaries from './Diaries';

const MyRecordPage = () => (
  <Container>
    <div style={{ maxWidth: 960, margin: '58px auto' }}>
      <Sections />
      <div id="graph-scroll" className="div-scroll" />
      <div id="graph" style={{ marginBottom: 56 }}>
        <BodyGraph isFull />
      </div>
      <Exercises />
      <Diaries />
    </div>
  </Container>
);

export default MyRecordPage;
