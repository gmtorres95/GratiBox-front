import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import UserContext from '../../contexts/userContext';
import Wrapper from './styles/Wrapper';
import StyledButton from './styles/StyledButton';
import banner from '../../assets/image05.webp';

export default function Home() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!!user) navigate('/main');
  }, [user, navigate]);

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
}
