import { NavLink } from 'react-router-dom';
import { HeaderBackground, LogoImage, NavField } from './Header.styled';
import animatedLogo from 'assets/humbee-anim.gif';
import { Container } from 'components/ComonElements';

const Header = () => {
  return (
    <HeaderBackground>
      <Container>
        <NavField>
          <NavLink to={'/team'}>Our Team</NavLink>
          <NavLink to={'/'}>
            <LogoImage>
              <img src={animatedLogo} alt="Studio logo" />
            </LogoImage>
          </NavLink>
          <NavLink to={'/projects'}>Our Games</NavLink>
        </NavField>
      </Container>
    </HeaderBackground>
  );
};

export default Header;
