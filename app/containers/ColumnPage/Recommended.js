import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
  .item {
    background: #000000;
    height: 144px;
    width: 216px;
    padding: 24px 8px;
    cursor: pointer;
    .title {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.11px;
      color: #ffcc21;
    }
    .divider {
      border-bottom: 1px solid #ffffff;
      width: 56px;
      margin: 10px auto 8px;
    }
    .des {
      font-family: 'Hiragino Kaku Gothic Pro';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

const items = [
  { type: 'RECOMMENDED COLUMN', des: 'オススメ' },
  { type: 'RECOMMENDED DIET', des: 'ダイエット' },
  { type: 'RECOMMENDED BEAUTY', des: '美容' },
  { type: 'RECOMMENDED HEALTH', des: '健康' },
];

const Recommended = ({ setSelectedType }) => (
  <Wrapper>
    {items.map((item, idx) => (
      <div
        className="item hover-up"
        key={idx}
        onClick={() => setSelectedType(item.type)}
      >
        <div className="title">{item.type}</div>
        <div className="divider" />
        <div className="des">{item.des}</div>
      </div>
    ))}
  </Wrapper>
);

export default Recommended;
