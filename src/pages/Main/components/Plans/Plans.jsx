import React, { useState } from 'react';

import Wrapper from './styles/Wrapper';
import Weekly from '../Weekly/Weekly';
import Montly from '../Montly/Montly';
import { RightArrow, LeftArrow } from './styles/StyledArrows';

export default function Plans() {
  const [plan, setPlan] = useState('weekly');

  function changePlan() {
    if(plan === 'weekly') setPlan('montly');
    else setPlan('weekly');
  }

  return (
    <Wrapper>
      
      <h2>Você ainda não assinou um plano, que tal começar agora?</h2>
      {plan === 'weekly' ? <Weekly /> : <Montly />}
      {plan === 'weekly' ? <RightArrow onClick={changePlan} /> : <LeftArrow onClick={changePlan} />}
    </Wrapper>
  );
}
