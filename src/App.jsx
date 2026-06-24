import { Suspense, useState } from "react";
import AvailablePlayers from "./components/AvailablePlayes/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SelectedPlayer from "./components/SelectedPlayer/SelectedPlayer";

const players = async () => {
  const playersData = await fetch("/player.json");
  const res = await playersData.json();
  // console.log(res)
  return res;
};

function App() {
  const playersPromise = players();
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="App container mx-auto px-4">
        <Navbar></Navbar>

        <div className="flex justify-between items-center my-4">
          {" "}
          <h1 className="text-2xl font-bold mb-4">Available Players:</h1>
          <div>
            <button
              className={
                toggle
                  ? "bg-green-400 p-2 rounded-2xl text-white"
                  : "bg-white p-2 rounded-2xl border-pink-100"
              }
              onClick={() => setToggle(true)}
            >
              Available Players
            </button>
            <button
              className={
                !toggle
                  ? "bg-green-400 p-2 rounded-2xl text-white"
                  : "bg-white p-2 rounded-2xl border-pink-100"
              }
              onClick={() => setToggle(false)}
            >
              Selected Players
            </button>
          </div>
        </div>

        {toggle ? (
          <Suspense
            fallback={
              <span className="loading loading-infinity loading-xl"></span>
            }
          >
            <AvailablePlayers
              id={playersPromise.id}
              playersPromise={playersPromise}
            ></AvailablePlayers>
          </Suspense>
        ) : (
          <SelectedPlayer></SelectedPlayer>
        )}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
