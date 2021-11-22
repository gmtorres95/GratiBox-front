import axios from 'axios';
import sendAlert from '../helpers/sendAlert';

const URL = process.env.REACT_APP_API_BASE_URL;

export function createNewUser(body, setIsButtonEnabled, navigate) {
  axios.post(URL+'/sign-up', body)
    .then((resp) => navigate('/sign-in'))
    .catch((err) => {
      if(err.response.status === 409) sendAlert('Erro no cadastro!','Email já cadastrado','error');
      if(err.response.status === 400) sendAlert('Erro no cadastro!', 'Dados inválidos', 'error');
      else sendAlert('Erro no servidor!','Tente novamente mais tarde','error');
      setIsButtonEnabled(true);
    })
}
