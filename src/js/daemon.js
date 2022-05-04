import Transformation from './transformation.js';

export default class Daemon extends Transformation {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
