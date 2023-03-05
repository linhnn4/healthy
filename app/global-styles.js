import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size: 14px !important;
    overflow-x: hidden;
    position: fixed;
    min-height: -webkit-fill-available;
    @media only screen and (min-width : 768px) {
        font-size: 16px !important;
    }
    @media only screen and (min-width : 1440px) {
        font-size: 20px !important;
    }
     @media only screen and (min-width : 1600px) {
        font-size: 24px !important;
    }
  }

  body, p, label, h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Sans JP' !important;
    color: #414141;
  }

  body.fontLoaded {
    font-family: 'Noto Sans JP' !important;
  }

  #app {
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    min-height: -webkit-fill-available;
  }

  .main {
    background-size: cover;
    min-height: -webkit-fill-available;
    width: 100%;
    margin: 0 auto;
    max-width: 2560px;
    &.light {
      background-size: cover;
    }
    &.landing {
      background: linear-gradient(180deg, #553397 0%, #369FB6 50.52%, #091267 100%);
    }
  }

  .light {
    background: #FFFFFF;
  }

  .primary {
    background: #FFCC21;
  }

  .primary-400 {
    background: #FF963C;
  }

  .primary-500 {
    background: #EA6C00;
  }

  .primary-300-400 {
    background: linear-gradient(180deg, #FFCC21 0%, #FF963C 100%);
  }

  .secondary {
    background: #8FE9D0;
  }

  .dark {
    background: #414141;
  }

  .dark-600 {
    background: #2E2E2E;
  }

  .gray {
    background: #777777;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .flex {
    display: flex;
  }
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .align-center {
    display: flex;
    align-items: center;
  }

  .ant-dropdown {
    width: 280px;
    top: 64px !important;
    ul {
      background: #777777;
      padding: 0;
      .ant-dropdown-menu-item {
        padding: 23px 32px;
        color: white;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 26px;
        font-family: 'Noto Sans JP' !important;
        &:hover {
          background-color: #414141 !important;
        }
      }
    }
  }

  .ant-spin-dot-item {
    background-color: #FFCC21;
  }

  .ant-notification-notice {
    color: white;
    padding: 8px 12px !important;
    &.ant-notification-notice-warning {
      background-color: #faad14;
    }
    &.ant-notification-notice-error {
      background-color: red;
    }
    &.ant-notification-notice-success {
      background-color: #52c41a;
    }
    .ant-notification-notice-icon {
      color: white !important;
      margin-top: -4px;
    }
    .ant-notification-notice-message {
      color: white;
      margin-bottom: 0px;
    }
    .ant-notification-notice-close {
      font-size: 16px;
      color: white;
      top: 5px !important;
    }
    .ant-notification-notice-with-icon {
      display: flex;
      align-items: center;
    }
  }
  .anticon.anticon-loading.anticon-spin {
    display: block;
  }
  .loader {
    animation: spin 2s linear infinite;
  }

  .loader-cubic {
    animation: spin 4s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
    transform: none !important;
    filter: none !important;
    .halfButton {
      cursor: not-allowed !important;
    }
  }

  #app::-webkit-scrollbar-track, #exercises::-webkit-scrollbar-track
  {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #777777;
  }

  #app::-webkit-scrollbar, #exercises::-webkit-scrollbar
  {
    width: 6px;
    background-color: #777777;
  }

  #app::-webkit-scrollbar-thumb, #exercises::-webkit-scrollbar-thumb
  {
    background-color: #FFCC21;
  }

  .hover-up {
    &:hover {
       -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  .hover-light {
    &:hover {
      filter: brightness(1.25);
    }
  }

  .hover-up-light {
    &:hover {
       -webkit-transform: scale(1.1);
      transform: scale(1.1);
      filter: brightness(1.25);
    }
  }

  .brightness {
    animation: brightness 3s;
  }
  @keyframes brightness {
    0%  { filter: drop-shadow(0px 0px 0px #fff);}
    100% { filter: drop-shadow(0px 0px 160px #fff) brightness(2) blur(4px); transform: scale(1.1);}
  } 

  .ant-btn-primary {
    border: none !important;
    background: linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%);
    box-shadow: none;
    height: 56px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    width: 296px;
    &:hover, &:focus, &:active {
      border: none !important;
      background: linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%);
      box-shadow: none;
    }
  }

  .div-scroll {
    margin-top: -64px;
    padding-top: 64px;
  }
`;

export default GlobalStyle;
