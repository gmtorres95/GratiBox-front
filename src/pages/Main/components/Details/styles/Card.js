import styled from 'styled-components';

const Card = styled.div`
  border-radius: 10px;
  background-color: #FFF;
  font-weight: 700;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: flex;
    border-radius: 10px;
  }

  p {
    color: #4D65A8;
    padding-left: 18px;
  }

  span {
    color: #E63C80;
  }

  div p {
    padding-left: 60px;
  }

  footer {
    padding: 28px 0px 12px;
    display: flex;
    justify-content: space-evenly;
  }

  footer span {
    font-weight: 400;
  }
`;

export default Card;
