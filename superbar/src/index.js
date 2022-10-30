import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scoreboard from './components/Scoreboard/scoreboard';
import Timer from './components/Timer/timer'
import ScoreAlert from './components/ScoreAlert/scorealert'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Scoreboard Team ={{
      Left: {
        Name: 'Fluminense',
        Score: 2,
        BGColor: 'green',
        FontColor: 'white'
      },
      Right: {
        Name: 'Vasco',
        Score: 1,
        BGColor: 'white',
        FontColor: 'black'
      }
    }
    } />
    <Timer TimerParam={{
      isActive: true,
      seconds: 0,
      minutes: 0,
    }}/>
    <ScoreAlert
      display={{active : false}}
    />
  </React.StrictMode>
);
