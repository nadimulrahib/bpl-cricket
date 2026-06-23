import { use } from "react";
import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Available Players: {players.length}
      </h1>

      <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            players.slice(0,8).map((player)=> <AvailablePlayer key={player.id} player={player} />)
        }
      </div>
    </div>
  );
};

export default AvailablePlayers;
