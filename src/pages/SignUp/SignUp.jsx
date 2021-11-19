import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { createNewUser } from '../../services/signUpServices';
import sendAlert from '../../helpers/sendAlert';
import Wrapper from './styles/Wrapper';
import SignUpForm from './styles/SignUpForm';
import StyledButton from './styles/StyledButton';
import AuthenticationInput from '../../commonStyles/AuthenticationInput';
import Loading from '../../commonComponents/Loading';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const navigate = useNavigate();

  function signUpHelper(e) {
    e.preventDefault();
    if(password !== confirmation) {
      sendAlert('Erro!','As duas senhas devem ser idênticas!','warning');
      return;
    }

    setIsButtonEnabled(false);
    createNewUser({name, email, password}, setIsButtonEnabled, navigate);
  }

  return (
    <Wrapper>
      <h1>Bem vindo ao GratiBox</h1>
      <SignUpForm onSubmit={isButtonEnabled ? signUpHelper : e => e.preventDefault()}>
        <AuthenticationInput
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => {setName(e.target.value )}}
          required
        />
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
        <AuthenticationInput
          type="password"
          placeholder="Confirmar senha"
          value={confirmation}
          onChange={(e) => {setConfirmation(e.target.value )}}
          required
        />
        <StyledButton type="submit" isButtonEnabled={isButtonEnabled}>
          {isButtonEnabled ? 'Cadastrar' : <Loading />}
        </StyledButton>
      </SignUpForm>
    </Wrapper>
  );
}
