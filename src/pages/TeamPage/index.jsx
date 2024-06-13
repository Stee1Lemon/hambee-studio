import { Container } from 'components/ComonElements';
import { NavLink } from 'react-router-dom';
import { TeamList, TeamTitle } from './TeamPage.styled';
import TeamCard from 'components/TeamCard';

const TeamPage = () => {
  return (
    <section>
      <Container>
        <TeamTitle>Our Team</TeamTitle>
        <TeamList>
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </TeamList>
        <NavLink to={'/'}>Back to Home page</NavLink>
      </Container>
    </section>
  );
};

export default TeamPage;
