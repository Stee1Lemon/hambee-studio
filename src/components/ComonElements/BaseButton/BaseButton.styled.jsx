import styled from 'styled-components';

const BaseButton = styled.button`
  color: #cecece;
  background-color: #76449d;
  border-radius: 200px;
  padding: 16px 60px;
  min-width: 173px;
  min-height: 56px;
  border: none;
  transition: all 1s ease;

  &:hover {
    /* background: var(--button-hover); */
    background-color: #492a61;
  }
`;

export default BaseButton;
