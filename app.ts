import Krusher from './Krusher.js';
import { GameLoop } from './GameLoop.js';

const game = new Krusher(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
