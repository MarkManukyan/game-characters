import Undead from '../src/Undead';

describe('Undead class', () => {
  test('should create an Undead with correct properties', () => {
    const undead = new Undead('Nazgul');
    expect(undead).toEqual({
      name: 'Nazgul',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });
});
