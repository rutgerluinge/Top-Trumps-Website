import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Navigator } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styling/teststyling.css";
import "./styling/essentials.css";
import { Home } from "./pages/home";
import { Game } from "./pages/game";
import { Play } from "./pages/play";
import { Implementation } from "./pages/implementation";
import { Results } from "./pages/results";

function App() {
  return (
    <div className="">
      <Navigator></Navigator>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/implementation" element={<Implementation />} />
        <Route path="/play" element={<Play />} />
        <Route path="/results" element={<Results />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
