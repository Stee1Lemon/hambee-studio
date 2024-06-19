import Svg from 'components/ComonElements/Svg';
import { MainField } from './Hero.styled';

const Hero = () => {
  return (
    <MainField>
      <h1>Hambee Studio </h1>
      {/* ul will be deleted from here */}
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
      <p>
        Our studio is committed to creating unique and immersive gaming
        experiences that stay in players' memories for a long time.
      </p>
      {/* For the future fix */}
      {/* <ul>
        <li>
          <a
            href="https://www.youtube.com/@HambeeStudio"
            rel="noreferrer"
            target="_blank"
          >
            <Svg icon="youtube" width="40px" height="40px" />
          </a>
        </li>
      </ul> */}
    </MainField>
  );
};

export default Hero;
