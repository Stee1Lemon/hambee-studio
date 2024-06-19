import Svg from 'components/ComonElements/Svg';
import {
  ImageBox,
  InformationField,
  SocialLinks,
  TeamCardElement,
} from './TeamCard.styled';

const TeamCard = ({ member }) => {
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
        <SocialLinks>
          {member.links.map((link, url) => (
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
