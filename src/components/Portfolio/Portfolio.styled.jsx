import styled from 'styled-components';

export const ContainerEl = styled.div`
  position: relative;
  margin-top: 30px;
  background-color: #999999;
  padding: 30px;
  border-radius: 10px;
`;

export const ButtonClose = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 5px 3px;
  background-color: var(--light);
  border-radius: 50%;
  position: absolute;
  right: 3%;

  transition: all 250ms ease;

  &:hover {
    color: #cecece;
    fill: #cecece;
    background-color: var(--accent);
  }
`;

export const ButtonCloseBottom = styled(ButtonClose)`
  margin-top: 15px;
  position: static;
  font-size: 18px;
  padding: 8px;
`;

export const TitleWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 250px;
  background-color: var(--base);
  border-radius: 10px;
`;

export const TitleEl = styled.h2`
  font-family: 'Libre Caslon Text', serif;
  font-weight: 400;
  font-size: 58px;
  letter-spacing: 5px;
  margin-bottom: 10px;
`;

export const NameEl = styled.p`
  font-family: 'Libre Caslon Text', serif;
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const PositionEl = styled.p`
  font-family: 'Libre Caslon Text', serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1px;
  color: #727272;
  font-style: italic;
`;

export const PersonalInfoWrapperEl = styled.div`
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  background-color: var(--base);
  width: 600px;
  border-radius: 10px;
`;

export const ImageBoxEl = styled.div`
  width: 250px;
  height: 250px;

  img {
    border-radius: 10px;
  }
`;

export const ContactsAndInfoWrapperEl = styled.div`
  text-align: start;
`;

export const ContactsEl = styled.h3`
  margin-bottom: 10px;
`;

export const ContactsListEl = styled.ul`
  padding-left: 30px;

  li {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const InfoWrapper = styled.div`
  p {
    padding-left: 30px;
    max-width: 400px;
  }
`;

export const InfoEl = styled.h3`
  margin-top: 15px;
`;

export const ProjectsWrapperEl = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: var(--base);
  border-radius: 10px;
`;

export const ProjectsOverviewEl = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const VideoEl = styled.iframe`
  margin-bottom: 30px;
  border-radius: 10px;
  width: 600px;
  height: 400px;
`;
