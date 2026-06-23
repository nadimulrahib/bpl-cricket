import { use } from "react";

const AvailablePlayers = ( { playersPromise } ) => {

    const playersData = use(playersPromise);
    console.log(playersData);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Available Players: {playersData.length}</h1>
        </div>
    );
};

export default AvailablePlayers;