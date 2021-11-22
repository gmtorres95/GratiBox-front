import axios from 'axios';
import sendAlert from '../helpers/sendAlert';
import createConfig from './createConfig';

const URL = process.env.REACT_APP_API_BASE_URL;

export function getUserPlan(token, setDisplay, setPlan) {
  axios.get(URL+'/subscription', createConfig(token))
    .then((resp) => {
      setPlan({
        isActive: true,
        ...resp.data,
      })
      setDisplay(true);
    })
    .catch((err) => {
      if(err.response.status === 404) setDisplay(true);
      else sendAlert('Erro no servidor!','Tente novamente mais tarde','error');
    })
}
