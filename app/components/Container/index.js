import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const scrollImg = require('../../images/icons/component_scroll.png');

const Wrapper = styled.div`
  width: 100%;
  min-height: -webkit-fill-available;
  padding-top: 64px;
  .children {
    max-width: 1280px;
    margin: 0 auto;
    min-height: calc(100vh - 192px);
  }
  .sroll-to-top {
    cursor: pointer;
    position: fixed;
    bottom: 150px;
    visibility: hidden;
    img {
      width: 48px;
    }
    &.show {
      visibility: visible;
    }
  }
`;

const Container = ({ children, height }) => {
  const right = (window.innerWidth - 1100) / 2;

  const scrollToTop = React.useCallback(() => {
    document.getElementById('sroll-to-top').classList.remove('show');
    document.getElementById('app').scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    let oldScrollTop = 0;
    document.getElementById('app').addEventListener('scroll', () => {
      const newScrollTop = document.getElementById('app').scrollTop;
      if (newScrollTop > oldScrollTop) {
        if (!document.getElementById('sroll-to-top').classList.contains('show'))
          document.getElementById('sroll-to-top').classList.add('show');
      }
      oldScrollTop = newScrollTop;
      if (newScrollTop === 0) {
        document.getElementById('sroll-to-top').classList.remove('show');
      }
    });
  }, []);

  return (
    <Wrapper height={height}>
      <Header />
      <div className="children">{children}</div>
      <Footer />
      <div
        className="sroll-to-top"
        id="sroll-to-top"
        style={{ right: right < 32 ? 32 : right }}
        onClick={scrollToTop}
      >
        <img src={scrollImg} alt="scrollImg" />
      </div>
    </Wrapper>
  );
};

export default Container;
