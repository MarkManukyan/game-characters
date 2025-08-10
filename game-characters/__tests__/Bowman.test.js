import Bowman from '../src/Bowman';

describe('Bowman class', () => {
  test('should create a Bowman with correct properties', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman).toEqual({
      name: 'Legolas',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });
});
