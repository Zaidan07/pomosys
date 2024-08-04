import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0D0404;
  user-select: none;
`;

export const ButtonDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TimerDisplay = styled.div`
  font-size: 14rem;
  font-weight: lighter;
  color: #FFF2F2;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.9;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const TimerButton = styled.button`
  height: 96px;
  width: 128px;
  padding: 10px 20px;
  font-size: 32px;
  background-color: #f26d6d;
  border: none;
  border-radius: 32px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #d65b5b;
  }
`;

export const ModeButton = styled.button`
 display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "#310e0e" : "#f8e1e1")};
  border: ${(props) => (props.active ? "3px solid  #ffff" : "1px solid #4d1e1e")};
  border-radius: 90px;
  color: ${(props) => (props.active ? "white" : "#4d1e1e")};
  cursor: pointer;
  margin: 5px;
  &:hover {
    background-color: ${(props) => (props.active ? "#310e0e" : "#e2c4c4")};
  }

  svg {
    margin-left: 8px;
    margin-right: 5px;
  }
`;
