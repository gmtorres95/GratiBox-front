import React, { useEffect, useState } from 'react';
import cep from 'cep-promise';

import { Checkmark } from '../styles/StyledIcons';

export default function SelectDelivery(props) {
  const {
    name,
    setName,
    address,
    setAddress,
    zipcode,
    setZipcode,
    city,
    setCity,
    state,
    setState,
  } = props;
  const [cepData, setCepData] = useState({city: '', state: ''});

  useEffect(() => {
    if(zipcode.length === 9) {
      cep(zipcode.replace('-',''))
        .then((resp) => setCepData(resp))
        .catch(setCepData({city: '', state: ''}));
    }
  }, [zipcode]);

  useEffect(() => {
    setCity(cepData.city);
    setState(cepData.state);
  }, [cepData]);

  return (
    <>
      <input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Endereço de entrega"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="CEP"
        maxLength="9"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        required
      />
      <input 
        value={city}
        placeholder="Cidade"
        disabled
        required
      />
      <input 
        value={state}
        placeholder="Estado"
        disabled
        required
      />
    </>
  );
}
