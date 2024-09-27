import React from 'react';
import '../component-css/AlgoComponent.css';

function AlgoComponent({ Name, onSort, isSorting }) {
  return (
    <button onClick={onSort} disabled={isSorting}>
      {Name}
    </button>
  );
}

export default AlgoComponent;