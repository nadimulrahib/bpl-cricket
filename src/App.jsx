import { Suspense } from "react";
import AvailablePlayers from "./components/AvailablePlayes/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";

const players = async () => {
  const playersData = await fetch("/player.json");
  const res = await playersData.json();
  // console.log(res)
  return res;
};

function App() {
  const playersPromise = players();
  console.log(playersPromise);
  return (
    <>
      <Navbar></Navbar>

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <AvailablePlayers
          id={playersPromise.id}
          playersPromise={playersPromise}
        ></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
