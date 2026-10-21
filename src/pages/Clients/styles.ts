import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const ClientsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
  flex: 1;
  background-color: rgb(242, 246, 247);
  
 
`;
export const Title = styled.div`
  font-size: 38px;
  font-weight: bold;
  color: rgb(13, 33, 63);
`;
export const StyledLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  color: rgb(32, 86, 167);
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 25px 20px;
  border-radius: 50px;
  
  background-color: #1a4da4;
  
  
  font-size: 25px;
  font-weight: bold;
  color: #fcf9f9;

`;
