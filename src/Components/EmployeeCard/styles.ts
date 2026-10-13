import styled from "@emotion/styled";

export const EmployeeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 350px;
  padding: 30px;
  background-color: white;
  
  border-radius: 20px;
  
  
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 124px;
  padding: 0 10px;
  padding-bottom: 8px;

`;

export const CardLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const CardValue = styled.span`
  font-size: 16px;
  color: #555;
`;
