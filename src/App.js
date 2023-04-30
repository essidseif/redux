import logo from './logo.svg';
import './App.css';
import Parcour from './Parcour';
import axios from "axios";
import GetLastOffersFromDmarket from "./Getdmarketoffers";
import Formu from './Formu';

function App() {
  return (
    <div className="App">
        <Parcour/>
        <GetLastOffersFromDmarket gameId="tf2"/>
        <Formu/>
    </div>
  );
}

export default App;
