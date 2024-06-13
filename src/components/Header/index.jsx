import { NavLink } from 'react-router-dom';
import { HeaderContainer, NavField } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <NavField>
        <NavLink to={'/projects'}>Projects</NavLink>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/team'}>Team</NavLink>
      </NavField>
    </HeaderContainer>
  );
};

export default Header;
