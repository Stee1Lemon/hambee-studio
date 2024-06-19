import styled from 'styled-components';

export const TeamList = styled.ul`
  margin-bottom: 40px;

  li {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 40px;
    justify-content: center;
  }
`;
