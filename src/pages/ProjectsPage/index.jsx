import { Container } from 'components/ComonElements';
import { SemiTitle } from 'components/ComonElements/SemiTitle/SemiTitle.styled';
import { ProjectList } from './ProjectPage.styled';
import ProjectCard from 'components/ProjectCard';
import projects from 'data/projects-data.json';

const ProjectsPage = () => {
  return (
    <section>
      <Container>
        <SemiTitle>Our Games</SemiTitle>
        <ProjectList>
          {projects.map(project => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </ProjectList>
      </Container>
    </section>
  );
};

export default ProjectsPage;
