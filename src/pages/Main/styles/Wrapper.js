import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 540px;
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    width: 80px;
    height: 28px;
    border-radius: 0px 0px 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    right: 0;

    background-color: #E63C80;
  }
`;

export default Wrapper;
