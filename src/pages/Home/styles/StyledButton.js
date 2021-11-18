import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  height: 44px;
  border-radius: 10px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#8C97EA")};
  font-weight: 500;
  font-size: 18px;
  color: #FFF;
`;

export default StyledButton;
