import styled from "@emotion/styled";

export const GetConsultationFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 500px;
  padding: 30px;
  background-color: white;
  border: 4px solid rgb(22, 10, 43);
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: rgb(3, 8, 141);
  text-align: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Checkbox = styled.input``;

export const CheckboxLabel = styled.label`
  font-size: 18px;
`;

export const SuccessMessage = styled.div`
padding: 20px;
background-color: #a3efb5;
color: #0e7929;
border: 1px solid #41b85b;
border-radius: 6px;
font-size: 20px;
text-align: center;
font-weight: bold;
`;

export const ErrorMessage = styled.p`
color: red;
font-size: 14px;
margin-top: -10px;
`;


