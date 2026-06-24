import SelectPlayer from "../SelectPlayer/SelectPlayer";

const SelectedPlayer = ({ buyPlayers, handleRemovePlayer }) => {
    console.log(buyPlayers);
    return (
        <div>
            <div>
                {
                    buyPlayers.map((player) => <SelectPlayer key={player.id} player={player} handleRemovePlayer={handleRemovePlayer} /> )
                }
            </div>
            <h1 className='text-3xl font-bold my-5'>Selected Player</h1>
        </div>
    );
};

export default SelectedPlayer;