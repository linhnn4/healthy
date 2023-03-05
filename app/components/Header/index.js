/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'antd';
import { useHistory } from 'react-router-dom';

const logo = require('../../images/logo.png');
const iconChallenge = require('../../images/icons/icon_challenge.png');
const iconInfo = require('../../images/icons/icon_info.png');
const iconMemo = require('../../images/icons/icon_memo.png');
const iconMenu = require('../../images/icons/icon_menu.png');

const Wrapper = styled.div`
  background: #414141;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
  height: 64px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  .header {
    width: 1280px;
    margin: 0 auto;
    padding: 0px 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      cursor: pointer;
    }
    .menus {
      display: flex;
      .menu {
        cursor: pointer;
        width: 150px;
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 23px;
        color: #ffffff;
        position: relative;
        img {
          margin-right: 8px;
        }
      }
      img {
        height: 32px;
      }
      .count {
        font-family: 'Inter' !important;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        color: #ffffff;
        background: #ea6c00;
        height: 16px;
        width: 16px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 24px;
        top: 0px;
      }
    }
  }
`;

const items = [
  {
    key: '1',
    label: <a onClick={e => e.preventDefault()}>自分の記録</a>,
  },
  {
    key: '2',
    label: <a onClick={e => e.preventDefault()}>体重グラフ</a>,
  },
  {
    key: '3',
    label: <a onClick={e => e.preventDefault()}>目標</a>,
  },
  {
    key: '4',
    label: <a onClick={e => e.preventDefault()}>選択中のコース</a>,
  },
  {
    key: '5',
    label: <a onClick={e => e.preventDefault()}>コラム一覧</a>,
  },
  {
    key: '6',
    label: <a onClick={e => e.preventDefault()}>設定</a>,
  },
];

const Header = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <div className="header">
        <img
          src={logo}
          alt="logo"
          width={144}
          onClick={() => history.push('/top')}
          className="logo"
        />
        <div className="menus">
          <div className="menu">
            <img src={iconMemo} alt="iconMemo" /> 自分の記録
          </div>
          <div className="menu">
            <img src={iconChallenge} alt="iconChallenge" /> チャレンジ
          </div>
          <div className="menu">
            <img src={iconInfo} alt="iconInfo" />
            お知らせ
            <div className="count">1</div>
          </div>
          <Dropdown menu={{ items }}>
            <a onClick={e => e.preventDefault()}>
              <img src={iconMenu} alt="iconMenu" />
            </a>
          </Dropdown>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
