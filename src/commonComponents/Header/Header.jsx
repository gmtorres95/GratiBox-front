import React, { useContext } from 'react';
import { HiLogout } from 'react-icons/hi';

import UserContext from '../../contexts/userContext';
import Wrapper from './styles/Wrapper';

export default function Header() {
  const { user } = useContext(UserContext);

  function logout() {
    localStorage.clear();
    window.open('/','_self');
  }

  return (
    <Wrapper>
      <header onClick={logout}>Sair<HiLogout /></header>
      <h1>Bom te ver por aqui, {user.name}</h1>
    </Wrapper>
  );
}
