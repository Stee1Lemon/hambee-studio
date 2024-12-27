import { ProjectImages } from 'components/ProjectImages/ProjectImages';
import {
  ButtonClose,
  ButtonCloseBottom,
  ContactsAndInfoWrapperEl,
  ContactsEl,
  ContactsListEl,
  ContainerEl,
  ImageBoxEl,
  InfoEl,
  InfoWrapper,
  NameEl,
  PersonalInfoWrapperEl,
  PositionEl,
  ProjectsOverviewEl,
  ProjectsWrapperEl,
  TitleEl,
  TitleWrapper,
  VideoEl,
} from './Portfolio.styled';
import Svg from 'components/ComonElements/Svg';

export const Portfolio = ({ portfolio, switchPortfolio }) => {
  return (
    <>
      {portfolio && (
        <ContainerEl>
          <ButtonClose onClick={() => switchPortfolio(null)}>
            <Svg icon={'close'} width="30px" height="30px" />
          </ButtonClose>
          <TitleWrapper>
            <TitleEl>Portfolio</TitleEl>
            <NameEl>{portfolio.name}</NameEl>
            <PositionEl>{portfolio.role}</PositionEl>
          </TitleWrapper>
          <PersonalInfoWrapperEl>
            <ImageBoxEl>
              <img
                src={`${process.env.PUBLIC_URL}/${portfolio.imagePortfolio}`}
                alt="Avatar"
              />
            </ImageBoxEl>
            <ContactsAndInfoWrapperEl>
              <ContactsEl>Contacts:</ContactsEl>
              <ContactsListEl>
                <li>
                  <a
                    href={`mailto:${portfolio.email}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Svg icon={'mail'} /> {portfolio.email}
                  </a>
                </li>
                {portfolio.socialLinks.map((link, url) => (
                  <li key={url}>
                    <a href={link.url} rel="noreferrer" target="_blank">
                      <Svg icon={link.platform} /> {link.platform}
                    </a>
                  </li>
                ))}
              </ContactsListEl>
              <InfoWrapper>
                <InfoEl>About me</InfoEl>
                <p>{portfolio.description}</p>
              </InfoWrapper>
            </ContactsAndInfoWrapperEl>
          </PersonalInfoWrapperEl>
          <ProjectsWrapperEl>
            <ProjectsOverviewEl>Projects overview</ProjectsOverviewEl>
            {portfolio.youtubeLink && (
              <VideoEl
                title="youtube-video"
                src={`https://www.youtube.com/embed/${portfolio.youtubeLink}`}
              ></VideoEl>
            )}
            {portfolio.projects.map(project => (
              <ProjectImages key={project.id} project={project} />
            ))}
          </ProjectsWrapperEl>
          <ButtonCloseBottom onClick={() => switchPortfolio(null)}>
            Close
          </ButtonCloseBottom>
        </ContainerEl>
      )}
    </>
  );
};
