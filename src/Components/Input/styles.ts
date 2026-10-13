import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: rgb(13, 11, 42);
`;

export const InputComponent = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid rgb(13, 11, 42);
  border-radius: 8px;
  font-size: 18px;
  outline: none;

  &::placeholder {
    color: rgb(48, 43, 114);
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: rgb(211, 47, 47);
  margin-top: 2px;
`;
