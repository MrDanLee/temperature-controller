export default function HistoryList({ history }) {
  return (
    <ul>
      {history.map((entry, index) => (
        <li key={index}>
          [{entry.time}] → {entry.temperature} °C
        </li>
      ))}
    </ul>
  );
}
