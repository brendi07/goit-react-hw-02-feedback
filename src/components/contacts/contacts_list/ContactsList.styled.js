import styled from '@emotion/styled';

export const ContactsListContainer = styled.div`

`;

export const ContactsListTitle = styled.h2`

`;

export const ContactList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
`;

export const ContactsLi = styled.li`
display: flex;
  list-style: none;
  font-family: 'Gasoek One', sans-serif;
  font-size: 20px;
  color: pink;
  gap: 180px;
    justify-content: space-between;
    align-items: center;
}
`;

export const ContactsListButton = styled.button`
  font-family: 'Handjet', cursive;
  font-size: 32px;
  color: grey;
  border-style: solid;
  border-radius: 10px;
  border-color: pink;
  &:hover {
    background-color: pink;
    transition: background-color 0.5s;
  }
  cursor: pointer;
`;