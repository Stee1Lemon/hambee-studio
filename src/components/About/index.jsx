import { SemiTitle } from 'components/ComonElements/SemiTitle/SemiTitle.styled';
import { Description } from './About.styled';

const About = () => {
  return (
    <>
      <SemiTitle>About Studio</SemiTitle>
      <Description>
        Hambee Studio was founded with a vision to bring something new and
        different to the world of gaming. Our team consists of students united
        by a love for games and a desire to create original and quality
        products.
      </Description>
      <SemiTitle>Our mission</SemiTitle>
      <Description>
        We believe that games can be not just entertainment, but art that can
        evoke emotions and tell amazing stories. Our mission is to create games
        that inspire, surprise and delight players around the world.
      </Description>
      <SemiTitle>Our projects</SemiTitle>
      <Description>
        Hambee Studio works on games of different genres and directions. We
        strive to experiment with new ideas and mechanics, creating projects
        that are different from anything else on the market. In our games we pay
        special attention to:
      </Description>
      <Description>
        We adhere to the principles of honesty, openness, and community
        engagement. Hambee Studio actively listens to player feedback and
        suggestions to improve our projects and make them as interesting and
        accessible to everyone as possible.
      </Description>
    </>
  );
};

export default About;
