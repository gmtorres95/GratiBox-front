import styled from 'styled-components';

const AuthenticationInput = styled.input`
height: 64px;
border-radius: 10px;
font-size: 24px;
font-weight: 500;
border: 1px solid #604848;
padding: 16px;
margin: 4px 0px;

&::placeholder {
  color: #60484866;
}
`;

export default AuthenticationInput;
