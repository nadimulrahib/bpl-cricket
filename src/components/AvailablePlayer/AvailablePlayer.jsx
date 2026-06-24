import { useState } from "react";

const AvailablePlayer = ({ player, availableBalance, setAvailableBalance }) => {
  const [selected, setSelected] = useState(false);

  const {
    player_name,
    player_image,
    player_country,
    rating,
    batting_style,
    bowling_style,
    price,
  } = player;

const handleSelectPlayer = () => {
  const playerPrice = Number(price.replace(/[$,]/g, ""));

  if (selected) return;

  if (availableBalance < playerPrice) {
    alert("Not enough balance!");
    return;
  }

  setSelected(true);
  setAvailableBalance(prev => prev - playerPrice);
};

  return (
    <div>
      <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        {/* Player Image */}
        <figure className="relative">
          <img
            src={player_image}
            alt={player_name}
            className="w-full h-56 object-cover object-top"
          />
          <div className="absolute top-3 right-3">
            <span className="badge badge-warning badge-lg font-semibold shadow">
              {bowling_style}
            </span>
          </div>
        </figure>

        <div className="card-body p-5 gap-3">
          {/* Name */}
          <div className="flex items-center gap-2">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-8">
                <span className="text-xs font-bold">
                  {player_image ? "" : player_name.charAt(0)}
                </span>
              </div>
            </div>
            <h2 className="card-title text-lg font-bold">{player_name}</h2>
          </div>

          {/* Country & Role */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-base-content/60 text-sm">
              <span>{player_country}</span>
            </div>
            <span className="badge badge-outline badge-sm">
              {batting_style}
            </span>
          </div>

          <div className="divider my-0"></div>

          {/* Rating */}
          <div>
            <p className="text-xs font-bold text-base-content/50 uppercase tracking-widest mb-2">
              Rating
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-base-content">
                {rating} / 10
              </span>
              <span className="badge badge-ghost">{rating}</span>
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between mt-1">
            <p className="font-bold text-base-content text-sm">
              Price: <span className="text-primary">{price}</span>
            </p>

            <button
              onClick={handleSelectPlayer}
              className={`btn rounded-2xl font-semibold text-white ${
                selected ? "bg-gray-500" : "bg-green-600"
              }`}
              disabled={selected}
            >
              {selected ? "selected" : "choose player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;