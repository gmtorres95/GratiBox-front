import React from 'react';
import { UpArrow, DownArrow, Checked, Unchecked } from '../styles/StyledIcons';

export default function SelectItems(props) {
  const {
    showItems,
    setShowItems,
    tea,
    setTea,
    incense,
    setIncense,
    organic,
    setOrganic,
  } = props;

  return (
    <div>
      <h3>Quero receber</h3>
      {showItems ? <UpArrow onClick={() => setShowItems(!showItems)} /> : <DownArrow onClick={() => setShowItems(!showItems)} />}
      {showItems ? <div>
        <div onClick={() => setTea(!tea)}>
          {tea ? <Checked /> : <Unchecked />}
          <h4>Chás</h4>
        </div>
        <div onClick={() => setIncense(!incense)}>
        {incense ? <Checked /> : <Unchecked />}
          <h4>Incensos</h4>
        </div>
        <div onClick={() => setOrganic(!organic)}>
        {organic ? <Checked /> : <Unchecked />}
          <h4>Produtos orgânicos</h4>
        </div>
      </div> : ''}
    </div>
  );
}
