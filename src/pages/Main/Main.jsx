import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { getUserPlan } from '../../services/mainServices';
import UserContext from '../../contexts/userContext';
import Wrapper from './styles/Wrapper';
import Loading from '../../commonComponents/Loading';
import Details from './components/Details/Details';
import { HiLogout } from 'react-icons/hi';

export default function Main() {
  const [display, setDisplay] = useState(false);
  const [subscription, setSubscription] = useState({isActive: false});
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) navigate('/');
    else getUserPlan(user.token, setDisplay, setSubscription);
  }, [user, navigate]);

  function logout() {
    localStorage.clear();
    window.open('/','_self');
  }

  return (
    <Wrapper>
      <header onClick={logout}>Sair<HiLogout /></header>
      {display ? (subscription.isActive ? <Details subscription={subscription} /> : 'OK') : <Loading />}
    </Wrapper>
  );
}
