import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
export default Container;
