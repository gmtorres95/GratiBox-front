import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

import Banner from '../../assets/image03.jpg';
import { registerSubscription } from '../../services/subscribeServices';
import UserContext from '../../contexts/userContext';
import sendAlert from '../../helpers/sendAlert';
import Loading from '../../commonComponents/Loading';
import Wrapper from './styles/Wrapper';
import Header from '../../commonComponents/Header/Header';
import Card from './styles/Card';
import StyledButton from './styles/StyledButton';
import SelectPlan from './components/SelectPlan';
import SelectDays from './components/SelectDays';
import SelectItems from './components/SelectItems';
import SelectDelivery from './components/SelectDelivery';

export default function Subscribe() {
  const [showPlan, setShowPlan] = useState(false);
  const [showDays, setShowDays] = useState(true);
  const [showItems, setShowItems] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  const [plan, setPlan] = useState(useParams().planType);
  const [deliveryDay, setDeliveryDay] = useState('');
  const [tea, setTea] = useState(false);
  const [incense, setIncense] = useState(false);
  const [organic, setOrganic] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function planSelectorHelper(e) {
    e.preventDefault();

    if (!deliveryDay) {
      sendAlert('Erro na seleção!','Selecione um dia para a entrega','error');
      return;
    }

    if (!tea && !incense && !organic) {
      sendAlert('Erro na seleção!','Selecione ao menos um item','error');
      return;
    }

    setShowDelivery(true);
  }

  function deliveryHelper(e) {
    e.preventDefault();
    // setIsButtonEnabled(false);

    if (name.length < 5 || !address || zipcode.length < 9 || !city || ! state) {
      sendAlert('Dados inválidos!','Preencha todos os campos corretamente','error');
      return;
    }

    const body ={
      city,
      state,
      name,
      address,
      zipcode: zipcode.replace('-',''),
      dayId: deliveryDay,
      items: [],
    };

    if(tea) body.items.push(1);
    if(incense) body.items.push(2);
    if(organic) body.items.push(3);

    console.log(body)

    registerSubscription(body, user.token, setIsButtonEnabled, navigate)
  }

  return (
    <Wrapper>
      <Header />
      <h2>“Agradecer é arte de atrair coisas boas”</h2>
      <form>
        <Card>
          <img src={Banner} alt="Banner" />
          {showDelivery ? <>
            <SelectDelivery
              name={name}
              setName={setName}
              address={address}
              setAddress={setAddress}
              zipcode={zipcode}
              setZipcode={setZipcode}
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
            />
          </> : <>
            <SelectPlan
              showPlan={showPlan}
              setShowPlan={setShowPlan}
              plan={plan}
              setPlan={setPlan}
            />
            <SelectDays
              showDays={showDays}
              setShowDays={setShowDays}
              deliveryDay={deliveryDay}
              setDeliveryDay={setDeliveryDay}
              plan={plan}
            />
            <SelectItems
              showItems={showItems}
              setShowItems={setShowItems}
              tea={tea}
              setTea={setTea}
              incense={incense}
              setIncense={setIncense}
              organic={organic}
              setOrganic={setOrganic}
            />
          </>}
        </Card>
        {showDelivery ? 
          <StyledButton
            onClick={isButtonEnabled ? deliveryHelper : (e) => e.preventDefault()}
            isButtonEnabled={isButtonEnabled}
          >{isButtonEnabled ? 'Finalizar' : <Loading />}</StyledButton>
          :
          <StyledButton
            isButtonEnabled
            onClick={planSelectorHelper}
          >Próximo</StyledButton>
        }
      </form>
    </Wrapper>
  );
}
