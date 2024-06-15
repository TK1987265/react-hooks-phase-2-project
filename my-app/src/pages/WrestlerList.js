import React, { useEffect, useState } from 'react';
import WrestlerCard from '../components/WrestlerCard';

function WrestlerList() {
  const [wrestlers, setWrestlers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/wrestlers')
      .then(response => response.json())
      .then(data =>{
    console.log(data)
      setWrestlers(data)});
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