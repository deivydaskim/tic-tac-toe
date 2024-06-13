import { useState } from 'react';

export default function Player({ name, symbol, isActive, onNameSave }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function editClickHandler() {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      onNameSave(symbol, playerName);
    }
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
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameText}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
