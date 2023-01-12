import Scene from './Scene.js';
import KeyListener from './KeyListener.js';
import Level1 from './Level1.js';
import CanvasUtil from './CanvasUtil.js';

export default class SceneStart extends Scene {

  private starting: boolean;

  private logo: HTMLImageElement;

  public constructor(maxY: number, maxX: number) {
    super(maxY, maxX);
    this.starting = false;
    this.logo = CanvasUtil.loadNewImage('./assets/logo.png');
    document.body.style.backgroundImage = "url('./assets/grass.jpg')";
  }

  public processInput(keyListener: KeyListener) {
    if (keyListener.keyPressed('KeyS')) {
      this.starting = true;
    } else {
      this.starting = false;
    }
  }

  public update(elapsed: number): Scene {
    if (this.starting === true) {
      return new Level1(this.maxY, this.maxX)
    } return null;
  }

  public render(canvas: HTMLCanvasElement) {
    CanvasUtil.drawImage(canvas, this.logo, 100, 100);
    CanvasUtil.writeTextToCanvas(canvas, 'Press S to Start', 760, 650, 'center', 'Arial', 50, 'White');
  }
}
