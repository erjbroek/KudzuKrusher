import CanvasUtil from './CanvasUtil.js';

export default abstract class Drawable {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  public constructor() {
    this.image = CanvasUtil.loadNewImage('./assets/hoe_wood.png');
    this.posX = 750;
    this.posY = 400;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  /**
   *
   *
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.getPosX(), this.getPosY());
  }
}
