import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 128px;
  background: #414141;
  .footer {
    width: 1280px;
    margin: 0 auto;
    padding: 0px 160px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
    gap: 45px;
    color: white;
    height: 128px;
  }
`;

const Footer = () => (
  <Wrapper>
    <div className="footer">
      <div className="footer-item">会員登録</div>
      <div className="footer-item">運営会社</div>
      <div className="footer-item">利用規約</div>
      <div className="footer-item">個人情報の取扱について</div>
      <div className="footer-item">特定商取引法に基づく表記</div>
      <div className="footer-item">お問い合わせ</div>
    </div>
  </Wrapper>
);

export default Footer;
