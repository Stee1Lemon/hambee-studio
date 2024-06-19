import styled from 'styled-components';

export const MainField = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;

  h1 {
    font-size: 64px;
    font-style: italic;
    padding-top: 60px;
    margin-bottom: 20px;
  }

  p {
    margin-top: 30px;
    font-size: 20px;
    line-height: 1.5;
  }

  ul {
    /* For the future fix */
    /* float: right;
    margin-top: 5%;
    margin-right: 5%; */
    display: flex;
    justify-content: center;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
  }

  a {
    display: block;
    fill: #ff0000;
    transition: all 500ms;
  }

  a:hover {
    fill: #e70000;
  }
`;
