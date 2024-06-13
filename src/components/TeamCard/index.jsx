import Svg from 'components/ComonElements/Svg';
import {
  ImageBox,
  InformationField,
  SocialLinks,
  TeamCardElement,
} from './TeamCard.styled';

const TeamCard = () => {
  return (
    <TeamCardElement>
      <ImageBox>
        <img src="https://placehold.co/264x260/png" alt="Team member avatar" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          voluptas commodi quis ut ex, dolorem eius obcaecati qui dolores iusto.
          Voluptate illo vero ut iusto.
        </p>
      </ImageBox>
      <InformationField>
        <h3>Team member name</h3>
        <p>Role</p>
        <SocialLinks>
          <li>
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Svg icon={'instagram'} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Svg icon={'linkedin'} />
            </a>
          </li>
        </SocialLinks>
      </InformationField>
    </TeamCardElement>
  );
};

export default TeamCard;
