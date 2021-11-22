import React from 'react';
import { UpArrow, DownArrow, Checked, Unchecked } from '../styles/StyledIcons';

export default function SelectPlan(props) {
  const {
    showPlan,
    setShowPlan,
    plan,
    setPlan,
  } = props;

  return (
    <div>
      <h3>Plano</h3>
      {showPlan ? <UpArrow onClick={() => setShowPlan(!showPlan)} /> : <DownArrow onClick={() => setShowPlan(!showPlan)} />}
      {showPlan ? <div>
        <div onClick={() => setPlan('Mensal')}>
          {plan === 'Mensal' ? <Checked /> : <Unchecked />}
          <h4>Mensal</h4>
        </div>
        <div onClick={() => setPlan('Semanal')}>
        {plan === 'Semanal' ? <Checked /> : <Unchecked />}
          <h4>Semanal</h4>
        </div>
      </div> : ''}
    </div>
  );
}
