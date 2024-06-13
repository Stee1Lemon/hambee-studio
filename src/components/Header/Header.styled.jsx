import { Container } from 'components/ComonElements';
import styled from 'styled-components';

export const HeaderContainer = styled(Container)`
  border-bottom: 3px dashed black;
`;

export const NavField = styled.nav`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  justify-content: space-around;
  padding: 20px 0;

  a.active {
    color: #bcb143;
  }
`;
