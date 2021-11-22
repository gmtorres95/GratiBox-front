import React from 'react';
import { UpArrow, DownArrow, Checked, Unchecked } from '../styles/StyledIcons';

export default function SelectDays(props) {
  const {
    showDays,
    setShowDays,
    deliveryDay,
    setDeliveryDay,
    plan,
  } = props;

  return (
    <div>
      <h3>Entrega</h3>
      {showDays ? <UpArrow onClick={() => setShowDays(!showDays)} /> : <DownArrow onClick={() => setShowDays(!showDays)} />}
      {showDays ? (plan === 'Mensal' ? <div>
        <div onClick={() => setDeliveryDay(1)}>
          {deliveryDay === 1 ? <Checked /> : <Unchecked />}
          <h4>Dia 1</h4>
        </div>
        <div onClick={() => setDeliveryDay(2)}>
          {deliveryDay === 2 ? <Checked /> : <Unchecked />}
          <h4>Dia 10</h4>
        </div>
        <div onClick={() => setDeliveryDay(3)}>
          {deliveryDay === 3 ? <Checked /> : <Unchecked />}
          <h4>Dia 20</h4>
        </div>
      </div> : <div>
        <div onClick={() => setDeliveryDay(4)}>
          {deliveryDay === 4 ? <Checked /> : <Unchecked />}
          <h4>Segunda</h4>
        </div>
        <div onClick={() => setDeliveryDay(5)}>
          {deliveryDay === 5 ? <Checked /> : <Unchecked />}
          <h4>Quarta</h4>
        </div>
        <div onClick={() => setDeliveryDay(6)}>
          {deliveryDay === 6 ? <Checked /> : <Unchecked />}
          <h4>Sexta</h4>
        </div>
      </div>) : ''}
    </div>
  );
}
