import styled from "@emotion/styled";


export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 40px;
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 320px;
  gap: 12px;
`;

export const Name = styled.h2`
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const InfoBox = styled.div`
  font-size: 14px;
  color: #34495e;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 6px;
`;

export const EmptyText = styled.p`
  font-size: 16px;
  color: #7f8c8d;
`;

