import React from 'react';
import { useNavigate } from 'react-router';

import Banner from '../../../../assets/image02.jpg';
import StyledButton from './styles/StyledButton';
import Wrapper from './styles/Wrapper';

export default function Montly() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <img src={Banner} alt="Banner" />
      <h2>
        Você recebe um box por mês. 
        Ideal para quem está começando agora.
      </h2>
      <StyledButton onClick={() => navigate('/subscribe/montly')}>Assinar</StyledButton>
    </Wrapper>
  );
}
