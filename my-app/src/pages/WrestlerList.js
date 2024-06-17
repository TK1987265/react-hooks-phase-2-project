import React, { useEffect, useState } from 'react';
import WrestlerCard from '../components/WrestlerCard';

function WrestlerList() {
  const [wrestlers, setWrestlers] = useState([]);

  useEffect(() => {
    fetch(`https://react-hooks-phase-2-project-3.onrender.com/wrestlers`)
    .then((r) => r.json())
    .then(data =>setWrestlers(data));
  }, []);

  return (
    <div>
      <h1>Wrestlers</h1>
      <div>
        {wrestlers.map(wrestler => (
          <WrestlerCard key={wrestler.id} wrestler={wrestler} />
        ))}
      </div>
    </div>
  );
}

export default WrestlerList;