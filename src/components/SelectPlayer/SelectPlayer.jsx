
const SelectPlayer = ({ player, handleRemovePlayer }) => {
    const handleRemove = () => {
        handleRemovePlayer(player);
    }
    return (
       <div className="card bg-base-100 border border-base-300 shadow-none rounded-xl mt-2">
        <div className="card-body p-4 flex-row items-center flex justify-between">
 
          {/* Avatar + Info */}
          <div className="flex items-center gap-3 flex-1">

            <img
              src={player.player_image}
              alt={player.player_name}
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div>
              <p className="font-bold text-sm text-base-content">{player.player_name}</p>
              <p className="text-xs text-base-content/50">{player.batting_style}</p>
            </div>
          </div>
 
          <button onClick={handleRemove } className="btn btn-ghost btn-sm px-2 text-error ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
 
        </div>
      </div>
    );
};

export default SelectPlayer;