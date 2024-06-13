import { NavLink } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to={'/projects'}>Projects</NavLink>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/team'}>Team</NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
