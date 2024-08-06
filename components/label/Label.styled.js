import styled from "styled-components";

const getBackgroundColor = (mode, active) => {
    if (!active) return "#310e0e";
    switch (mode) {
      case "focus":
        return "#310e0e";
      case "shortBreak":
        return "#0f2c15";
      case "longBreak":
        return "#0e2231";
      default:
        return "#310e0e";
    }
  };    

  let colorLabel;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 15px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => getBackgroundColor(props.mode, props.active)};
  border: 2px solid white;
  border-radius: 90px;
  color: #fff;  
  margin-right: 3px;

  svg {
    margin-left: 8px;
    margin-right: 5px;
  }
`;
