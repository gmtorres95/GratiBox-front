import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  height: 36px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 24px;
  color: #FFF;
  background-color: #8C97EA;
  margin-top: 8px;
  opacity: ${(props) => (props.isButtonEnabled ? '1' : '0.7')};
`;

export default StyledButton;
