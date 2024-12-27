import Svg from 'components/ComonElements/Svg';
import {
  ImageBox,
  InformationField,
  PortfolioButton,
  SocialLinks,
  TeamCardElement,
} from './TeamCard.styled';

const TeamCard = ({ member, switchPortfolio }) => {
  return (
    <TeamCardElement>
      <ImageBox>
        <img
          src={`${process.env.PUBLIC_URL}/${member.image}`}
          alt="Team member avatar"
        />
        <p>{member.description}</p>
      </ImageBox>
      <InformationField>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <PortfolioButton onClick={() => switchPortfolio(member.name)}>
          Portfolio <Svg icon={'mouse-click'} />
        </PortfolioButton>
        <SocialLinks>
          {member.socialLinks.map((link, url) => (
            <li key={url}>
              <a href={link.url} rel="noreferrer" target="_blank">
                <Svg icon={link.platform} />
              </a>
            </li>
          ))}
        </SocialLinks>
      </InformationField>
    </TeamCardElement>
  );
};

export default TeamCard;
