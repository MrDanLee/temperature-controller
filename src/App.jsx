import { useState } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControls from "./components/TemperatureControls";
import HistoryList from "./components/HistoryList";

export default function App() {
  const [temperature, setTemperature] = useState(20);
  const [history, setHistory] = useState([]);

  const addToHistory = (newTemp) => {
    const time = new Date().toLocaleTimeString();
    setHistory((prev) => [...prev, { time, temperature: newTemp }]);
  };

  const increase = () => {
    const newTemp = temperature + 1;
    setTemperature(newTemp);
    addToHistory(newTemp);
  };

  const decrease = () => {
    const newTemp = temperature - 1;
    setTemperature(newTemp);
    addToHistory(newTemp);
  };

  const reset = () => {
    setTemperature(20);
    setHistory([]);
  };

  return (
    <div className="app">
      <h1>Controlador de Temperatura</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControls
        onIncrease={increase}
        onDecrease={decrease}
        onReset={reset}
      />
      <HistoryList history={history} />
    </div>
  );
}
