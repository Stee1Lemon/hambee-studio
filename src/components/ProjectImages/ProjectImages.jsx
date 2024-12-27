import { useState } from 'react';
import { ProjectName, ScreenShortsEl } from './ProjectImages.styled';

export const ProjectImages = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(project.projectImages[0]);

  const images = project.projectImages;

  const handleImageSwap = () => {
    setCurrentImage(prevImage => {
      const currentIndex = images.indexOf(prevImage);
      const nextIndex = (currentIndex + 1) % images.length;
      return images[nextIndex];
    });
  };

  return (
    <ScreenShortsEl>
      {project.projectName && <ProjectName>{project.projectName}</ProjectName>}
      <span>Click the image to swap it!</span>
      <img
        src={`${process.env.PUBLIC_URL}/${currentImage}`}
        alt="Swappable"
        onClick={handleImageSwap}
      />
    </ScreenShortsEl>
  );
};
