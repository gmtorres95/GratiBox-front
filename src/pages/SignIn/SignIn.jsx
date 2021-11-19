import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { login } from '../../services/signInServices';
import UserContext from '../../contexts/userContext';
import Wrapper from './styles/Wrapper';
import SignInForm from './styles/SignInForm';
import StyledButton from './styles/StyledButton';
import AuthenticationInput from '../../commonStyles/AuthenticationInput';
import Loading from '../../commonComponents/Loading';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  function signInHelper(e) {
    e.preventDefault();
    setIsButtonEnabled(false);
    login({email, password}, setUser, setIsButtonEnabled, navigate);
  }

  return (
    <Wrapper>
      <h1>Bem vindo ao GratiBox</h1>
      <SignInForm onSubmit={isButtonEnabled ? signInHelper : e => e.preventDefault()}>
        <AuthenticationInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value )}}
          required
        />
        <AuthenticationInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => {setPassword(e.target.value )}}
          required
        />
        <StyledButton type="submit" isButtonEnabled={isButtonEnabled}>
          {isButtonEnabled ? 'Login' : <Loading />}
        </StyledButton>
        <Link to="/sign-up">Ainda não sou grato</Link>
      </SignInForm>
    </Wrapper>
  );
}
