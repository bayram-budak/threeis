import './style.css'

import GameController from './scripts/gameController'

const app = document.querySelector<HTMLDivElement>('#app')
app!.style.height = "600px";

const gameController  = new GameController(<HTMLDivElement>app);
gameController.startGame();