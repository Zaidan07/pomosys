import styled from "styled-components";


export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.$color};
  user-select: none;
`;

export const ButtonDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TimerDisplay = styled.div`
  font-size: 14rem;
  font-weight: lighter;
  color: #fff2f2;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.9;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TimerButton = styled.button`
  height: ${(props) => (props.$isBig ? "90px" : "80px")};
  width: ${(props) => (props.$isBig ? "130px" : "80px")};
  font-size: 32px;
  background-color: ${(props) => props.$buttonColor};
  border: none;
  border-radius: 24px;
  color: white;
  cursor: pointer;
  /* &:hover {
    background-color: #d65b5b;
  } */
`;
