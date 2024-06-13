import { Container } from 'components/ComonElements';
import { NavLink } from 'react-router-dom';

const TeamPage = () => {
  return (
    <>
      <Container>
        <h3>Team Page</h3>
        <NavLink to={'/'}>Back to Home page</NavLink>
      </Container>
    </>
  );
};

export default TeamPage;
