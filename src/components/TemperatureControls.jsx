export default function TemperatureControls({ onIncrease, onDecrease, onReset }) {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
