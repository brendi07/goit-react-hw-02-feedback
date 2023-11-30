import styled from '@emotion/styled';

export const PhonebookForm = styled.form`
  width: 400px;
  height: 182px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  border-style: solid;
  border-radius: 10px;
  border-color: hotpink;
  align-items: center;
  gap: 20px;
`;

export const PhonebookLabel = styled.label`
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  color: grey;
  margin-right: 10px;
`;

export const PhonebookInput = styled.input`
  border-radius: 6px;
  border: solid 3px pink;
`;

export const PhonebookButton = styled.button`
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
