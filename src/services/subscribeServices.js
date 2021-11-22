import axios from 'axios';
import sendAlert from '../helpers/sendAlert';

import createConfig from './createConfig';

const URL = process.env.REACT_APP_API_BASE_URL;

export function registerSubscription(body, token, setIsButtonEnabled, navigate) {
  axios.post(URL+'/subscription', body, createConfig(token))
    .then((resp) => {
      sendAlert('Sucesso!','O seu novo plano foi confirmado', 'success');
      navigate('/main');
    })
    .catch((err) => {
      if(err.response.status === 404) sendAlert('Erro na requisição!', 'Dados inválidos', 'error');
      else sendAlert('Erro no servidor!','Tente novamente mais tarde','error');
      setIsButtonEnabled(true);
    })
}
