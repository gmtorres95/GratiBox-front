import React from 'react';

import Banner from '../../../../assets/image03.jpg';
import convertToDate from '../../../../helpers/convertToDate';
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
  // const nextDeliveries = getNextDeliveries('Semanal', 'wednesday');

  console.log(props.subscription)

  return (
    <Wrapper>
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
// Plano: @tipo_de_plano
// Data da assinatura: dd/mm/aa
// Próximas entregas: 
//          dd/mm/aaa
//          dd/mm/aaa
//          dd/mm/aaa
