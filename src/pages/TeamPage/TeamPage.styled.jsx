import styled from 'styled-components';

export const TeamList = styled.ul`
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
