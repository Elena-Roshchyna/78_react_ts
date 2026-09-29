import { useState, type ChangeEvent } from "react";

import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";


import {
  Homework08Wrapper,
  InputsContainer,
  ResultsContainer,
  ResultBlock,
  ResultWrapper,
  ResultTitle,
  Title,
  Paragraph,
} from "./styles";

function Homework08() {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");

  const [firstResult, setFirstResult] = useState("");
  const [secondResult, setSecondResult] = useState("");


  const onChangeFirstInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstInputValue(event.target.value);
  };

 
  const onChangeSecondInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondInputValue(event.target.value);
  };

  const showResults = () => {
    setFirstResult(firstInputValue);
    
    setSecondResult(secondInputValue);
  };

  return (
    <Homework08Wrapper>
      <Title>Homework 08</Title>
      <Paragraph>Inputs example</Paragraph>

      <InputsContainer>
       

        {/* Первый контролируемый инпут */}
        <Input
          name="firstInput"
          label="First Value"
          placeholder="Enter first value"
          value={firstInputValue}
          onChange={onChangeFirstInput}
        />

        {/* Второй контролируемый инпут */}
        <Input
          name="secondInput"
          label="Second Value"
          placeholder="Enter second value"
          value={secondInputValue}
          onChange={onChangeSecondInput}
        />

        
        <Button name="Get result" onClick={showResults} />
      </InputsContainer>

     
      <ResultsContainer>
        <ResultWrapper>

        <ResultTitle>First output:</ResultTitle>
        <ResultBlock>{firstResult}</ResultBlock>
       </ResultWrapper>
        
        <ResultWrapper>
          <ResultTitle>Second output:</ResultTitle>

          <ResultBlock>{secondResult}</ResultBlock>

        </ResultWrapper>
      </ResultsContainer>
    </Homework08Wrapper>
  );
}


export default Homework08;