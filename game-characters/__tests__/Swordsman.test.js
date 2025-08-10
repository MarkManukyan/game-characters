import Swordsman from '../src/Swordsman';

describe('Swordsman class', () => {
  test('should create a Swordsman with correct properties', () => {
    const swordsman = new Swordsman('Aragorn');
    expect(swordsman).toEqual({
      name: 'Aragorn',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});
