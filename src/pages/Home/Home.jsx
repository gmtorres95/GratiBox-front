import React from 'react';

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
      <StyledButton>Quero começar</StyledButton>
      <StyledButton backgroundColor="#4D65A8">Já sou grato</StyledButton>
      </div>
    </Wrapper>
  );
};
