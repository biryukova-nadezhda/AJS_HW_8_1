import Transformation from './transformation.js';

export default class Magician extends Transformation {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
