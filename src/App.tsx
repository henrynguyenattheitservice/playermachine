import React from 'react';
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import './App.css';

const playerMachine = createMachine({
      id: "player",
      initial: "paused",
      states: {
        paused: {
          entry: "stop",
          on: {
            PLAY: "playing"
          }
        },
        playing: {
          entry: "play",
          on: {
            STOP: "paused"
          }
        }
      }
    },
{
  actions: {
    play: () => {
      console.log("PLAY")
    },
    stop: () => {
      console.log("STOP")
    }
  }
})




function App() {
    const [current, send] = useMachine(playerMachine);


    return (
    <div className="App">
        <button onClick={() => send("STOP")}>pause</button>
        <button onClick={() => send("PLAY")}>play</button>

    </div>
  );
}

export default App;
