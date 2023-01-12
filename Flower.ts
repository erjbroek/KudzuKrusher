import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Flower extends ScoreItem {
  private timeToNextChange: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/flower_0.png');
    this.posX = Math.random() * maxX;
    this.posY = Math.random() * maxY;
    this.timeToNextChange = 0;
    this.scoreModifier = -1;
  }

  /**
   *
   */
  public update(elapsed: number): void {
    this.timeToNextChange += elapsed / 1000;
    if (this.timeToNextChange > 5) {
      this.image = CanvasUtil.loadNewImage('./assets/flower_1.png');
      this.scoreModifier = -2;
    }
    if (this.timeToNextChange > 10) {
      this.image = CanvasUtil.loadNewImage('./assets/flower_2.png');
      this.scoreModifier = -3;
    }
    if (this.timeToNextChange > 15) {
      this.image = CanvasUtil.loadNewImage('./assets/flower_3.png');
      this.scoreModifier = -5;
    }
  }
}
