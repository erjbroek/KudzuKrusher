import Scene from './Scene.js';
import SceneStart from './SceneStart.js';
import KeyListener from './KeyListener.js';
import SceneLose from './SceneLose.js';
import CanvasUtil from './CanvasUtil.js';

export default class SceneWin extends Scene {

  private starting: boolean;

  public constructor(maxY: number, maxX: number) {
    super(maxY, maxX);
    this.starting = false;
    document.body.style.backgroundImage = "url('./assets/grass.jpg')";
  }

  public processInput(keyListener: KeyListener) {
    if (keyListener.keyPressed('KeyR')) {
      this.starting = true;
    } else {
      this.starting = false;
    }
  }

  public update(elapsed: number): Scene {
    if (this.starting === true) {
      return new SceneStart(this.maxX, this.maxY);
    } return null;
  }

  public render(canvas: HTMLCanvasElement) {
    CanvasUtil.writeTextToCanvas(canvas, 'You won', 760, 400, 'center', 'Arial', 50, 'White');
    CanvasUtil.writeTextToCanvas(canvas, 'Press R to Start', 760, 470, 'center', 'Arial', 50, 'White');
  }
}
