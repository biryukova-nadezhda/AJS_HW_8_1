import Daemon from '../daemon.js';
import Magician from '../magician.js';

test('should be create a new object Daemon', () => {
  const expected = {
    name: 'Valerion',
    type: 'Daemon',
    health: 100,
    level: 1,
    cell: 1,
    Fstoned: false,
    attackValue: 10,
    defence: 40,
  };

  const result = new Daemon('Valerion');
  expect(result).toEqual(expected);
});

test('should be create a new object Magician', () => {
  const expected = {
    name: 'Valerion',
    type: 'Magician',
    health: 100,
    level: 1,
    cell: 1,
    Fstoned: false,
    attackValue: 10,
    defence: 40,
  };

  const result = new Magician('Valerion');
  expect(result).toEqual(expected);
});

test('shoud show 27 to attack without enchantment', () => {
  const expected = 27;
  const result = new Magician('Valerion');
  result.cell = 2;
  result.attackValue = 30;

  expect(result.attack).toBe(expected);
});

test('shoud show 22 to attack with enchantment', () => {
  const expected = 22;
  const result = new Magician('Valerion');
  result.cell = 2;
  result.attackValue = 30;
  result.stoned = true;

  expect(result.attack).toBe(expected);
});

test('shoud show 22 to attack without enchantment', () => {
  const result = new Magician('Valerion');
  expect(result.stoned).toBeFalsy();
});
