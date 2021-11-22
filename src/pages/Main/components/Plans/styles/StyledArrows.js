import styled from 'styled-components';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

const RightArrow = styled(GoArrowRight)`
  color: #E63C80;
  font-size: 40px;
  position: absolute;
  bottom: 32px;
  right: 20px;
`;

const LeftArrow = styled(GoArrowLeft)`
  color: #E63C80;
  font-size: 40px;
  position: absolute;
  bottom: 32px;
  left: 20px;
`;

export {
  RightArrow,
  LeftArrow,
};
