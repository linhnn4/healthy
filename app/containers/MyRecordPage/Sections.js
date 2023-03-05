import React from 'react';
import styled from 'styled-components';

const myRecommend1 = require('../../images/MyRecommend-1.jpg');
const myRecommend2 = require('../../images/MyRecommend-2.jpg');
const myRecommend3 = require('../../images/MyRecommend-3.jpg');

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
  .section-wrapper {
    width: 288px;
    height: 288px;
    padding: 24px;
    background: #ffcc21;
    position: relative;
    cursor: pointer;
    .section {
      mix-blend-mode: luminosity;
      opacity: 0.25;
      height: 240px;
      background-size: cover !important;
      background-repeat: no-repeat !important;
      background-size: auto 100% !important;
      position: relative;
      z-index: 1;
    }
    .mask {
      background: #000000;
      mix-blend-mode: luminosity;
      position: absolute;
      left: 24px;
      top: 24px;
      width: 240px;
      height: 240px;
    }
    .info {
      position: absolute;
      z-index: 2;
      left: 0;
      top: 111px;
      width: 100%;
      text-align: center;
      .title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.125px;
        color: #ffcc21;
        margin-bottom: 11px;
      }
      .sub-title {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;
        background: #ff963c;
        width: 160px;
        margin: 0 auto;
        padding-bottom: 3px px;
      }
    }
  }
`;

const Sections = () => (
  <Wrapper>
    <a href="#graph-scroll">
      <div className="section-wrapper">
        <div
          className="section"
          style={{ background: `url(${myRecommend1})` }}
        />
        <div className="mask" />
        <div className="info">
          <div className="title">BODY RECORD</div>
          <div className="sub-title">自分のカラダの記録</div>
        </div>
      </div>
    </a>
    <a href="#exercise-scroll">
      <div className="section-wrapper">
        <div
          className="section"
          style={{ background: `url(${myRecommend2})` }}
        />
        <div className="mask" />
        <div className="info">
          <div className="title">MY EXERCISE</div>
          <div className="sub-title">自分の運動の記録</div>
        </div>
      </div>
    </a>
    <a href="#diary-scroll">
      <div className="section-wrapper">
        <div
          className="section"
          style={{ background: `url(${myRecommend3})` }}
        />
        <div className="mask" />
        <div className="info">
          <div className="title">MY DIARY</div>
          <div className="sub-title">自分の日記</div>
        </div>
      </div>
    </a>
  </Wrapper>
);

export default Sections;
