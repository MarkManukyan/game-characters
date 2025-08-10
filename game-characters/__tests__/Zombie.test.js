import Zombie from '../src/Zombie';

describe('Zombie class', () => {
  test('should create a Zombie with correct properties', () => {
    const zombie = new Zombie('Walker');
    expect(zombie).toEqual({
      name: 'Walker',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});
