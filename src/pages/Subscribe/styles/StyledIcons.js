import styled from 'styled-components';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';
import { BsFillSquareFill, BsFillXSquareFill, } from 'react-icons/bs';

const DownArrow = styled(HiArrowDown)`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 24px;
`;

const UpArrow = styled(HiArrowUp)`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 24px;
`;

const Unchecked = styled(BsFillSquareFill)`
  border-radius: 5px;
  font-size: 20px;
  color: #FFF;
`;

const Checked = styled(BsFillXSquareFill)`
  border-radius: 5px;
  font-size: 20px;
  color: #FFF;
  background-color: #4D65A8;
  border: solid 1px #4D65A8;
`;

export {
  DownArrow,
  UpArrow,
  Unchecked,
  Checked,
};
