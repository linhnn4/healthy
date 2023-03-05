import React from 'react';

// const loadingImg = require('../../images/loading.png');

const Loading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      position: 'fixed',
      minHeight: '-webkit-fill-available',
      top: 0,
      left: 0,
      background: '#00000073',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      {/* <img
        src={loadingImg}
        width={100}
        height={100}
        className="loader"
        alt="loading"
      /> */}
    </div>
  </div>
);

export default Loading;
