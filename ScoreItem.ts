import Drawable from './Drawable.js';

export default abstract class ScoreItem extends Drawable {
  protected scoreModifier: number;

  public getScoreModifier(): number {
    return this.scoreModifier;
  }

  public abstract update(elapsed: number): void;
}
