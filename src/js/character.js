export default class Character {
  constructor(name, type) {
    const typesPerson = [
      'Magician',
      'Daemon',
    ];

    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Ошибка! Имя должно быть строкой, а также быть длиной от 2 до 10 символов!');
    }

    if (!typesPerson.includes(type)) {
      throw new Error('Ошибка! Такого типа персонажа не существует!');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
