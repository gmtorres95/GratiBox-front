import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { getUserPlan } from '../../services/mainServices';
import UserContext from '../../contexts/userContext';
import Wrapper from './styles/Wrapper';
import Loading from '../../commonComponents/Loading';
import Details from './components/Details/Details';

export default function Main() {
  const [display, setDisplay] = useState(false);
  const [subscription, setSubscription] = useState({isActive: false});
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) navigate('/');
    else getUserPlan(user.token, setDisplay, setSubscription);
  }, [user, navigate]);

  return (
    <Wrapper>
      <h1>Bom te ver por aqui, {user.name}</h1>
      {display ? (subscription.isActive ? <Details subscription={subscription} /> : '') : <Loading />}
    </Wrapper>
  );
}
