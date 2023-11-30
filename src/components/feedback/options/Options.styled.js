import styled from '@emotion/styled';

export const OptionsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px
`;

export const OptionsButton = styled.button`
  font-family: 'Handjet', cursive;
  font-size: 32px;
  color: hotpink;
  border-style: solid;
  border-radius: 10px;
  border-color: pink;
  &:hover {
    background-color: pink;
    transition: background-color 0.5s;
  }
  cursor: pointer;
`;