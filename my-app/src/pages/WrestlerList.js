
import WrestlerCard from '../components/WrestlerCard';

function WrestlerList({wrestlers}) {




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