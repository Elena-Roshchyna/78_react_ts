import styled from "@emotion/styled";


export const AnimalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 300px;
  padding: 30px;
  background-color: rgb(131, 204, 238);
  color: rgb(16, 7, 45);
  border-radius: 12px;
  font-size: 20px;
  text-align: center;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const AnimalSpecies = styled.div``;

export const AnimalImage = styled.img`
  width: 270px;
  height: 270px;
  object-fit: contain;
  border-radius: 8px;
`;

