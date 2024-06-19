import { Container } from 'components/ComonElements';
import { TeamList } from './TeamPage.styled';
import TeamCard from 'components/TeamCard';
import { SemiTitle } from 'components/ComonElements/SemiTitle/SemiTitle.styled';
import team from 'pages/TeamPage/team-data.json';

const TeamPage = () => {
  return (
    <section>
      <Container>
        <SemiTitle>Our Team</SemiTitle>
        <TeamList>
          {team.map(member => (
            <TeamCard member={member} key={member.id} />
          ))}
        </TeamList>
      </Container>
    </section>
  );
};

export default TeamPage;
