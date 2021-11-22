import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 640px;
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;
  
  h2 {
    font-size: 18px;
    font-weight: 100;
    text-align: left;
    padding: 0px 8px 16px;
  }

  h4 {
    font-size: 18px;
    font-weight: 400;
    margin-left: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Wrapper;
