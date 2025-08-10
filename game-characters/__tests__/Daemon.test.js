import Daemon from '../src/Daemon';

describe('Daemon class', () => {
  test('should create a Daemon with correct properties', () => {
    const daemon = new Daemon('Balrog');
    expect(daemon).toEqual({
      name: 'Balrog',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});
