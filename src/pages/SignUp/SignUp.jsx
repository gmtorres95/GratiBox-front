import React from 'react';

import Wrapper from './styles/Wrapper';
import SignUpForm from './styles/SignUpForm';
import StyledButton from './styles/StyledButton';
import AuthenticationInput from '../../styles/AuthenticationInput';

export default function SignUp() {
  return (
    <Wrapper>
      <h1>Bem vindo ao GratiBox</h1>
      <SignUpForm>
        <AuthenticationInput
          type="text"
          placeholder="Nome"
          required
        />
        <AuthenticationInput
          type="email"
          placeholder="Email"
          required
        />
        <AuthenticationInput
          type="password"
          placeholder="Senha"
          required
        />
        <AuthenticationInput
          type="password"
          placeholder="Confirmar senha"
          required
        />
        <StyledButton>Cadastrar</StyledButton>
      </SignUpForm>
    </Wrapper>
  );
}
