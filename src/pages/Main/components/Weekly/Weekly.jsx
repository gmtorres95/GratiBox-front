import React from 'react';
import { useNavigate } from 'react-router';

import Banner from '../../../../assets/image04.jpg';
import StyledButton from './styles/StyledButton';
import Wrapper from './styles/Wrapper';

export default function Weekly() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <img src={Banner} alt="Banner" />
      <h2>
        Você recebe um box por semana.
        Ideal para quem quer exercer a gratidão todos os dias.
      </h2>
      <StyledButton onClick={() => navigate('/subscribe/weekly')}>Assinar</StyledButton>
    </Wrapper>
  );
}
