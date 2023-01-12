import Drawable from './Drawable.js';
import ScoreItem from './ScoreItem.js';

export default class Player extends Drawable {
  private speed: number;

  public constructor(maxX: number, maxY: number) {
    super();
    this.speed = 5;
  }

  public collidesWithItem(item: ScoreItem): boolean {
    if (this.posY < (item.getPosY() + item.getHeight())
    && (this.posY + this.image.height) > item.getPosY()
     && (item.getPosX() + item.getWidth()) > this.posX
       && (this.posX + this.image.width) > item.getPosX()) {
      return true;
    } return false;
  }

  public move(directionX: number, directionY: number) {
    this.posX = directionX;
    this.posY = directionY;
  }
}
