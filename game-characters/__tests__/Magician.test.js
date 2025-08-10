import Magician from '../src/Magician';

describe('Magician class', () => {
  test('should create a Magician with correct properties', () => {
    const magician = new Magician('Gandalf');
    expect(magician).toEqual({
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});
