export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected: {turn.square.row + 1} Row -{' '}
          {turn.square.col + 1} Column
        </li>
      ))}
    </ol>
  );
}
