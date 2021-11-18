import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from './styles/Wrapper';
import StyledButton from './styles/StyledButton';
import banner from '../../assets/image05.webp';

export default function Home() {
  return (
    <Wrapper>
      <h1>Bem vindo ao GratiBox</h1>
      <span>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</span>
      <img src={banner} alt="Banner" />
      <div>
        <Link to="sign-up">
          <StyledButton>Quero começar</StyledButton>
        </Link>
        <Link to="sign-in">
          <StyledButton backgroundColor="#4D65A8">Já sou grato</StyledButton>
        </Link>
      </div>
    </Wrapper>
  );
};
