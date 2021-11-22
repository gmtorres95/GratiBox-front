import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { getUserPlan } from '../../services/mainServices';
import UserContext from '../../contexts/userContext';
import Wrapper from './styles/Wrapper';
import Loading from '../../commonComponents/Loading';

export default function Main() {
  const [display, setDisplay] = useState(false);
  const [plan, setPlan] = useState({isActive: false});
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) navigate('/');
    else getUserPlan(user.token, setDisplay, setPlan);
  }, [user, navigate]);

  return (
    <Wrapper>
      {display ? (plan.isActive ? 'is active' : 'no plan') : <Loading />}
    </Wrapper>
  );
}
