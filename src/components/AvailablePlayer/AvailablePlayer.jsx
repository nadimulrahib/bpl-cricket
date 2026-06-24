import { useState } from "react";

const AvailablePlayer = ({ player }) => {

  const [selected, setSelected]=useState(false)

    const {player_name,player_image,player_country,rating,batting_style,bowling_style,price}=player;
    return (
        <div>
            <div className="">
      <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        {/* Player Image */}
        <figure className="relative">
          <img
            src={player_image}
            alt={player_name}
            className="w-full h-56 object-cover object-top"
          />
          {/* Role Badge on image */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21l1.9-5.7A8.38 8.38 0 013 9a9 9 0 1118 0 8.38 8.38 0 01-1.9 6.3L21 21H3z"
                />
              </svg>
              <span>{player_country}</span>
            </div>
            <span className="badge badge-outline badge-sm">{batting_style}</span>
          </div>
 
          <div className="divider my-0"></div>
 
          {/* Rating & Stats */}
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
              Price:{" "}
              <span className="text-primary">{price}</span>
            </p>

            <button onClick={()=>setSelected(!selected)} className="btn bg-green-600 rounded-2xl font-semibold text-white">{selected?"selected":"choose player"}</button>


            {/* <button
              className={`btn btn-sm ${
                selected ? "btn-success" : "btn-primary"
              } transition-all`}
              onClick={() => setSelected(!selected)}
            >
              {selected ? "✓ Selected" : "Choose Player"}
            </button> */}
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AvailablePlayer;