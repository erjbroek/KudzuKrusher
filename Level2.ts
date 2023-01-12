import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import SceneWin from './SceneWin.js';
import CanvasUtil from './CanvasUtil.js';
import Player from './Player.js';
import ScoreItem from './ScoreItem.js'
import Flower from './Flower.js';
import Kudzu from './Kudzu.js';
import SceneLose from './SceneLose.js';
import MouseListener from './MouseListener.js';
import Level3 from './Level3.js';

export default class Level2 extends Scene {
  private player: Player;

  private kudzu: Kudzu;

  private scoreItems: ScoreItem[];

  private starting: boolean;

  private timeToNextKudzu: number;

  private currentScore: number;

  private flowersLost: number;

  public constructor(maxY: number, maxX: number) {
    super(maxY, maxX);
    this.starting = false;
    this.player = new Player(maxX, maxY);
    this.scoreItems = [];
    for (let i = 0; i < 51; i++) {
      this.scoreItems.push(new Flower(this.maxX, this.maxY));
    }
    this.timeToNextKudzu = 0;
    this.currentScore = 0;
    this.flowersLost = 10;
    document.body.style.backgroundImage = "url('./assets/grass2.png')";
  }

  /**
   *
   */
  public processInput(keyListener: KeyListener, mouseListener: MouseListener) {
    console.log(mouseListener.getMousePosition());
    this.player.move(mouseListener.getMousePosition().x, mouseListener.getMousePosition().y);
    if (mouseListener.buttonPressed(0)) {
      this.scoreItems.forEach((item) => {
        if (this.player.collidesWithItem(item)) {
          this.currentScore += item.getScoreModifier();
          if (item instanceof Flower) {
            this.flowersLost -= 1;
          }
          this.scoreItems.splice(this.scoreItems.indexOf(item), 1);
        }
      });
    }
  }

  public update(elapsed: number): Scene {
    this.timeToNextKudzu += elapsed;
    if (this.timeToNextKudzu >= 300) {
      this.timeToNextKudzu = 0;
      if (Math.random() > 0.4) {
        this.scoreItems.push(new Flower(this.maxX, this.maxY));
      } else {
        this.scoreItems.push(new Kudzu(this.maxX, this.maxY, (Math.random() * 10 - 5), (Math.random() * 10 - 5)));
      }
    }
    this.scoreItems.forEach((item) => {
      item.update(elapsed);
    });

    if (this.currentScore >= 150) {
      return new Level3(this.maxX, this.maxY);
    }
    if (this.flowersLost <= 0) {
      return new SceneLose(this.maxY, this.maxX);
    }
    return null;
  }

  public render(canvas: HTMLCanvasElement) {
    this.player.render(canvas);
    this.scoreItems.forEach((item) => {
      item.render(canvas);
    });

    CanvasUtil.writeTextToCanvas(canvas, `Points: ${this.currentScore} / 150`, 50, 50, 'left', 'Arial', 40, 'white');
    CanvasUtil.writeTextToCanvas(canvas, `Flower lifes left: ${this.flowersLost}`, 50, 100, 'left', 'Arial', 40, 'white');
    CanvasUtil.writeTextToCanvas(canvas, 'level2', 1200, 100, 'left', 'Arial', 40, 'white');
  }
}
