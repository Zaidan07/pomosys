// components/Timer.styled.js
import styled from 'styled-components';

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8e1e1;
`;

export const TimerDisplay = styled.div`
  font-size: 16rem;
  font-weight: bold;
  color: #4d1e1e;
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
  padding: 10px 20px;
  font-size: 1.5rem;
  background-color: #f26d6d;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #d65b5b;
  }
`;

export const ModeButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${(props) => (props.active ? '#f26d6d' : '#f8e1e1')};
  border: ${(props) => (props.active ? 'none' : '1px solid #4d1e1e')};
  border-radius: 5px;
  color: ${(props) => (props.active ? 'white' : '#4d1e1e')};
  cursor: pointer;
  margin: 5px;
  &:hover {
    background-color: ${(props) => (props.active ? '#d65b5b' : '#e2c4c4')};
  }
`;
