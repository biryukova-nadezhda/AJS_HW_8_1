import Character from './character.js';

export default class Transformation extends Character {
  constructor(name, type) {
    super(name, type);
    this.cell = 1;
    this.Fstoned = false;
  }

  set stoned(value) {
    this.Fstoned = value;
  }

  get stoned() {
    return this.Fstoned;
  }

  set attack(value) {
    this.attackValue = value;
  }

  get attack() {
    let calcValue = this.attackValue * (1 - (this.cell - 1) / 10);

    if (this.Fstoned) {
      calcValue -= Math.log2(this.cell) * 5;
      return Math.round(calcValue);
    }

    return calcValue;
  }
}
