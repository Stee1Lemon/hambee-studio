import styled from 'styled-components';

export const TeamCardElement = styled.li`
  width: 264px;
  background-color: #ffffff;
  border-radius: 0px 0px 4px 4px;
  transition: box-shadow 500ms;

  &:hover {
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  }
`;

export const ImageBox = styled.div`
  width: 264px;
  height: 260px;

  position: relative;
  overflow: hidden;

  p {
    position: absolute;
    top: 0;
    height: 100%;
    padding: 15px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: var(--complement);
    background-color: #a39494d3;
    transform: translateY(100%);
    transition: transform 250ms;
  }

  &:hover {
    p {
      transform: translateY(0);
    }
  }
`;

export const InformationField = styled.div`
  padding: 32px 16px;
  text-align: center;

  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  gap: 24px;
  justify-content: center;

  li {
    width: 40px;
    height: 40px;
  }

  a {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #6262ff;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    transition: background-color 500ms;
    fill: white;
  }

  a:hover {
    background-color: #2e2ef5;
  }
`;
