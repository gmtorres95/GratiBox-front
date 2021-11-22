import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  background-color: #FFF;
  border-radius: 10px;
  color: #4D65A8;
  padding: 0px 24px 12px;

  & > div {
    width: 100%;
    background-color: #E0D1ED9E;
    margin: 8px;
    padding: 12px;
    border-radius: 5px;
    position: relative;
  }

  & div div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  & div div input:last-child {
    width: 40%;
    margin-left: 12px;
  }

  img {
    width: 100%;
    height: 172px;
    object-fit: cover;
    display: flex;
    border-radius: 10px;
    margin-bottom: 32px;
  }

  input {
    width: 100%;
    height: 44px;
    border-radius: 5px;
    background-color: #E0D1ED9E;
    color: #102060;
    font-weight: 900;
    padding: 0px 12px;
    margin: 4px 0px;
  }

  input::placeholder {
    color: #4D65A8;
    font-weight: 700;
  }
`;


export default Card;
