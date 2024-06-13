import { Container } from 'components/ComonElements';
import Hero from 'components/Hero';
import { Section } from './HomePage.styled';
import About from 'components/About';

const HomePage = () => {
  return (
    <>
      <Container>
        <Section>
          <Hero />
        </Section>
        <Section>
          <About />
        </Section>
      </Container>
    </>
  );
};

export default HomePage;
