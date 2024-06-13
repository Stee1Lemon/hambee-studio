import { Container } from 'components/ComonElements';
import { NavLink } from 'react-router-dom';
import { TeamList } from './TeamPage.styled';
import TeamCard from 'components/TeamCard';
import { SemiTitle } from 'components/ComonElements/SemiTitle/SemiTitle.styled';

const TeamPage = () => {
  return (
    <section>
      <Container>
        <SemiTitle>Our Team</SemiTitle>
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
