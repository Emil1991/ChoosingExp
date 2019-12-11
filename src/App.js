import React,{Fragment} from "react";
import './App.css';
import RewardSection from "./components/RewardSection/RewardSection"
import GameSection from "./components/GameSection/GameSection"
import InfoSection from "./components/InfoSection/InfoSection"

function App() {
  return (
    <div id="OldestGrid">
      <RewardSection></RewardSection>
      <GameSection></GameSection>
      <InfoSection></InfoSection>
    </div>
  );
}

export default App;