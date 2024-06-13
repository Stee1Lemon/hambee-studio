import Svg from 'components/ComonElements/Svg';
import { MainField } from './Hero.styled';

const Hero = () => {
  return (
    <MainField>
      <h1>Hambee Studio</h1>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/@HambeeStudio"
            rel="noreferrer"
            target="_blank"
          >
            <Svg icon="youtube" width="40px" height="40px" />
          </a>
        </li>
      </ul>
    </MainField>
  );
};

export default Hero;
