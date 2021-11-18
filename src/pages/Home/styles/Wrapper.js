import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #6d7ce4 50%, #4d65a8 50%);

  @media (min-height: 692px) {
    height: 100vh;
  }

  h1 {
    margin: 52px 0px 44px;
    font-weight: 500;
    font-size: 28px;
  }

  span {
    margin: 0px 16px;
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
  }

  div {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Wrapper;
