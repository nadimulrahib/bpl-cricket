import { use } from "react";
import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
}) => {
  const players = use(playersPromise);

  return (
    <div>
      <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.slice(0, 8).map((player) => (
          <AvailablePlayer key={player.id} player={player} 
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
