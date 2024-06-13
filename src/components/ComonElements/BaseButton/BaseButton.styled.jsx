import styled from 'styled-components';

const BaseButton = styled.button`
  /* color: var(--white-color); */
  /* background: var(--third-color); */
  color: #cecece;
  background-color: #76449d;
  border-radius: 200px;
  padding: 16px 60px;
  min-width: 173px;
  min-height: 56px;
  border: none;
  transition: background-color 250ms;

  &:hover {
    /* background: var(--button-hover); */
    background-color: #492a61;
  }
`;

export default BaseButton;
