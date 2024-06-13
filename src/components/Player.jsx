import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function editClickHandler() {
    setIsEditing((prevState) => !prevState);
  }

  function changingNameHandler(e) {
    setPlayerName(e.target.value);
  }

  let playerNameText = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameText = (
      <input value={playerName} onChange={changingNameHandler} />
    );
  }

  return (
    <li>
      <span className="player">
        {playerNameText}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
