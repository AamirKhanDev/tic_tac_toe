import React from 'react';
import Background from '../images/Background.jpg'


const style = {
  backgroundImage: `url(${Background})`,
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
      {value}
  </button>
);

export default Square;

