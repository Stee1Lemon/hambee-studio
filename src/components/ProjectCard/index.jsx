import {
  ImageBox,
  InformationField,
  ProjectCardElement,
} from './ProjectCard.styled';

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardElement>
      <ImageBox>
        <img
          src={`${process.env.PUBLIC_URL}/${project.image}`}
          alt="Game poster"
        />
      </ImageBox>
      <InformationField>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </InformationField>
    </ProjectCardElement>
  );
};

export default ProjectCard;
