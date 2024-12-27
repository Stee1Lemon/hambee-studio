import { Container } from 'components/ComonElements';
import { TeamList } from './TeamPage.styled';
import TeamCard from 'components/TeamCard';
import { SemiTitle } from 'components/ComonElements/SemiTitle/SemiTitle.styled';
import { Portfolio } from 'components/Portfolio';
import team from 'data/team-data.json';
import portfolioData from 'data/portfolio-data.json';
import { useState } from 'react';

const TeamPage = () => {
  const [portfolio, setPortfolio] = useState(null);

  const switchPortfolio = name => {
    if (!name) setPortfolio(null);
    if (name === 'Vlada Yatsyno') setPortfolio('Vlada Yatsyno');
    if (name === 'Andrii Vantukh') setPortfolio('Andrii Vantukh');
  };

  return (
    <section>
      <Container>
        {portfolio === 'Vlada Yatsyno' && (
          <Portfolio
            portfolio={portfolioData[0]}
            switchPortfolio={switchPortfolio}
          />
        )}
        {portfolio === 'Andrii Vantukh' && (
          <Portfolio
            portfolio={portfolioData[1]}
            switchPortfolio={switchPortfolio}
          />
        )}
        {!portfolio && (
          <>
            <SemiTitle>Our Team</SemiTitle>
            <TeamList>
              {team.map(member => (
                <TeamCard
                  member={member}
                  key={member.id}
                  switchPortfolio={switchPortfolio}
                />
              ))}
            </TeamList>
          </>
        )}
      </Container>
    </section>
  );
};

export default TeamPage;
