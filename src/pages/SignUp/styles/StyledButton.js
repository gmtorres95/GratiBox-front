import styled from 'styled-components';

const StyledButton = styled.button`
  width: 236px;
  height: 56px;
  border-radius: 10px;
  margin-top: 60px;
  background-color: #8C97EA;
  color: #FFF;
  font-size: 36px;
  font-weight: 700;
  opacity: ${(props) => (props.isButtonEnabled ? '1' : '0.5')};
`;

export default StyledButton;
