import styled from "@emotion/styled";

export const GetProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex: 1;
  padding: 40px;
`;

export const Title = styled.h2`
  font-size: 25px;
  color: #2c3e50;
  margin-top: -100px;
`;

export const Message = styled.p`
  color: #27ae60;
  font-weight: bold;
  font-size: 18px;
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-weight: bold;
  font-size: 18px;
`;
