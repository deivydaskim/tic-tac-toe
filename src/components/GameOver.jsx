export default function GameOver({ winner, reset }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won this game</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={reset}>Rematch!</button>
      </p>
    </div>
  );
}
