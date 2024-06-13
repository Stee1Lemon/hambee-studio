import styled from 'styled-components';

export const MainField = styled.div`
  position: relative;
  background-image: url('https://placehold.co/900x600/png');
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 500px;

  h1 {
    font-size: 64px;
    font-style: italic;
    padding-top: 60px;
  }

  ul {
    float: right;
    margin-top: 5%;
    margin-right: 5%;
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
