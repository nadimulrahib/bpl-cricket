import { Suspense } from "react";
import AvailablePlayers from "./components/AvailablePlayes/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const players = async () => {
  const playersData = await fetch("/player.json");
  const res = await playersData.json();
  // console.log(res)
  return res;
};

function App() {
  const playersPromise = players();
  return (
    <>
    <div className="App container mx-auto px-4">


      <Navbar></Navbar>

      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <AvailablePlayers
          id={playersPromise.id}
          playersPromise={playersPromise}
        ></AvailablePlayers>
      </Suspense>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
