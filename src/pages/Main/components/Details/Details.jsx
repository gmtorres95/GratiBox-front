import React, { useContext } from 'react';

import Banner from '../../../../assets/image03.jpg';
import convertToDate from '../../../../helpers/convertToDate';
import UserContext from '../../../../contexts/userContext';
import Wrapper from './styles/Wrapper';
import Card from './styles/Card';
import getNextDeliveries from '../../../../helpers/getNextDeliveries';

export default function Details(props) {
  const {
    plan,
    subscription_date,
    items,
  } = props.subscription;
  const nextDeliveries = getNextDeliveries(plan.name, plan.delivery_day);
  const { user } = useContext(UserContext);

  return (
    <Wrapper>
      <h1>Bom te ver por aqui, {user.name}</h1>
      <h2>“Agradecer é arte de atrair coisas boas”</h2>
      <Card>
        <img src={Banner} alt="Banner" />
        <p>Plano: <span>{plan.name}</span></p>
        <p>Data de assinatura: <span>{convertToDate(subscription_date)}</span></p>
        <p>Próximas entregas:</p>
        <div>
          {nextDeliveries.map((date, i) => <p key={i}><span>{convertToDate(date)}</span></p>)}
        </div>
        <footer>{items.map((item, i) => <span key={i}>{item}</span>)}</footer>
      </Card>
    </Wrapper>
  );
}
