import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scoreboard from './components/Scoreboard/scoreboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Scoreboard Team ={{
      Left: {
        Name: 'Botafogo',
        Score: 1,
        BGColor: 'black',
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
  </React.StrictMode>
);
