import styled from 'styled-components';

export const HeaderBackground = styled.div`
  border-bottom: 3px solid var(--dark);
`;

export const NavField = styled.nav`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20px;

  a {
    color: var(--complement);
    transition: all 500ms;
  }

  a:hover {
    color: var(--accent);
  }

  a.active {
    color: var(--highlight);

    div {
      border-color: var(--highlight);
    }
  }
`;

export const LogoImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-bottom: 4px solid var(--complement);
  transition: all 500ms;

  &:hover {
    border-color: var(--accent);
  }
`;
