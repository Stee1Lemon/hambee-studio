import { Container } from 'components/ComonElements';
import { SemiTitle } from 'components/ComonElements/SemiTitle/SemiTitle.styled';
import { NavLink } from 'react-router-dom';
import { ProjectList } from './ProjectPage.styled';
import ProjectCard from 'components/ProjectCard';

const ProjectsPage = () => {
  return (
    <section>
      <Container>
        <SemiTitle>Our Games</SemiTitle>
        <ProjectList>
          <ProjectCard />
        </ProjectList>
        <NavLink to={'/'}>Back to Home page</NavLink>
      </Container>
    </section>
  );
};

export default ProjectsPage;
