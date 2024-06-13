import {
  ImageBox,
  InformationField,
  ProjectCardElement,
} from './ProjectCard.styled';

const ProjectCard = () => {
  return (
    <ProjectCardElement>
      <ImageBox>
        <img src="https://placehold.co/900x450/png" alt="Game poster" />
      </ImageBox>
      <InformationField>
        <h3>Game title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores
          inventore vel eum maiores repellendus quidem mollitia possimus
          provident velit! Delectus ad dignissimos facilis voluptates, laborum
          veritatis atque ipsum molestias enim. Perspiciatis quibusdam error
          repellat nobis architecto excepturi voluptatibus dolor ad asperiores
          delectus quidem harum velit quo veniam hic, corrupti blanditiis odio
          illum a iusto debitis, soluta alias eligendi impedit. Illum esse ab
          velit tempore temporibus voluptatum deserunt deleniti, quae accusamus
          exercitationem quidem adipisci consequatur eaque non optio vitae iure
          veniam necessitatibus laborum iusto architecto, eos officia ducimus.
          Quam facere labore nam alias doloribus ipsam tempora nihil nobis
          cumque quaerat.
        </p>
      </InformationField>
    </ProjectCardElement>
  );
};

export default ProjectCard;
