import React from 'react';
import shuffle from "shuffle-array";
import './App.css';

function App() {

  const [players, setPlayers] = React.useState();
  const [list, setList] = React.useState([]);

  const breakUpPlayers = () => {
    setList(players.split("\n"));
  }

  const spin = () => {
    const previousList = list.join("-");
    let randomizedList = shuffle(list).join("-");

    if (previousList !== randomizedList) {
      randomizedList = randomizedList.split("-");
    } else {
      randomizedList = shuffle(list);
    }

    setList([...randomizedList]);
  }

  return (
    <div id="App">
      <div className="form_container">
        <h1>Raffle Randomizer</h1>
        <div>
          <label>Winner's Item: </label>
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <label>Spins: </label>
          <input type="text" placeholder="Spins" />
        </div>
        <div>
          <label>Number to Win: </label>
          <input type="text" placeholder="Winning Number" />
        </div>
        <div className="textarea_container">
          <label>Players: </label>
          <textarea onChange={(e) => setPlayers(e.currentTarget.value)} />
        </div>
        <button onClick={players ? breakUpPlayers : null}>Submit</button>
      </div>
      <div className="roster">
        <h2>Your roster</h2>
        <div>
          <ol>
            {list.map((val, i) => (
              <li key={i}>{val}</li>
            ))}
          </ol>
        </div>
        <div>
          <button onClick={list ? spin : null}>Spin</button>
        </div>
      </div>
    </div>
  );
}

export default App;
