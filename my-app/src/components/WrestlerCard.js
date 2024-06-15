

import React from 'react';

function WrestlerCard({ wrestler }) {
  return (
    <div>
      <h2>{wrestler.name}</h2>
      <img src={wrestler.image} alt={wrestler.name} />
      <p>Signature Move: {wrestler.signatureMove}</p>
    </div>
  );
}

export default WrestlerCard;