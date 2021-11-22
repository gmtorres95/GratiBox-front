import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  background-color: #E5CDB3;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: flex;
    border-radius: 25px;
  }

  h2 {
    color: #4D65A8;
    font-weight: 700;
    padding: 20px 24px 36px;
  }
`;

export default Wrapper;
