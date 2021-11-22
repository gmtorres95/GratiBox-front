import axios from 'axios';
import sendAlert from '../helpers/sendAlert';

const URL = process.env.REACT_APP_API_BASE_URL;

export function login(body, setUser, setIsButtonEnabled, navigate) {
  axios.post(URL+'sign-in', body)
    .then((resp) => {
      localStorage.setItem('user', JSON.stringify(resp.data));
      setUser(resp.data);
      navigate('/main');
    })
    .catch((err) => {
      if(err.response.status === 401) sendAlert('Erro de autenticação!', 'Login e/ou senha incorretos', 'error');
      else sendAlert('Erro no servidor!','Tente novamente mais tarde','error');
      setIsButtonEnabled(true);
    })
}
