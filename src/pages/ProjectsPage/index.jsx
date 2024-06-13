import { Container } from 'components/ComonElements';
import { NavLink } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <>
      <Container>
        <h2>Project Page</h2>
        <NavLink to={'/'}>Back to Home page</NavLink>
      </Container>
    </>
  );
};

export default ProjectsPage;
