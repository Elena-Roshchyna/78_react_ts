import styled from "@emotion/styled";

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 15px;
  background-color: white;
  border: 2px solid rgb(38, 10, 43); 
  border-radius: 8px;
  font-size: 18px;
  color: rgb(38, 10, 43);
  word-break: break-all;
`;
