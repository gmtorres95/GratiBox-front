import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { getUserPlan } from '../../services/mainServices';
import UserContext from '../../contexts/userContext';
import Wrapper from './styles/Wrapper';
import Header from '../../commonComponents/Header/Header';
import Loading from '../../commonComponents/Loading';
import Details from './components/Details/Details';
import Plans from './components/Plans/Plans';

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
      <Header />
      {display ? (subscription.isActive ? <Details subscription={subscription} /> : <Plans />) : <Loading />}
    </Wrapper>
  );
}
