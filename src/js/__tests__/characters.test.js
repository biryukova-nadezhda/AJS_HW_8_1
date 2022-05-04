import Character from '../character.js';

test('shoud be create an object with type Daemon', () => {
  const expected = {
    name: 'Valerion',
    type: 'Daemon',
    health: 100,
    level: 1,
  };

  const result = new Character('Valerion', 'Daemon');
  expect(result).toEqual(expected);
});

test('should be error, if the name less then 2 symbols', () => {
  const expected = 'Ошибка! Имя должно быть строкой, а также быть длиной от 2 до 10 символов!';
  expect(() => new Character('V', 'Daemon')).toThrow(expected);
});

test('should be error, if the name more then 10 symbols', () => {
  const expected = 'Ошибка! Имя должно быть строкой, а также быть длиной от 2 до 10 символов!';
  expect(() => new Character('Valerionnnn', 'Daemon')).toThrow(expected);
});

test('should be error, if the this type note exist', () => {
  const expected = 'Ошибка! Такого типа персонажа не существует!';
  expect(() => new Character('Valerion', 'Rogue')).toThrow(expected);
});
