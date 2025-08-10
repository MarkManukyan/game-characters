import Character from '../src/Character';

describe('Character class', () => {
  test('Создание персонажа с валидными данными', () => {
    const character = new Character('Legolas', 'Bowman');
    expect(character.name).toBe('Legolas');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('Слишком короткое имя (менее 2 символов)', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
  });

  test('Слишком длинное имя (более 10 символов)', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow();
  });

  test('Некорректный тип персонажа', () => {
    expect(() => new Character('Legolas', 'InvalidType')).toThrow();
  });

  test('Метод levelUp() увеличивает уровень и характеристики', () => {
    const character = new Character('Legolas', 'Bowman');
    character.attack = 25;
    character.defence = 25;
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30); // 25 * 1.2 = 30
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  test('Метод levelUp() не работает, если здоровье 0', () => {
    const character = new Character('Legolas', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow();
  });

  test('Метод damage() уменьшает здоровье', () => {
    const character = new Character('Legolas', 'Bowman');
    character.defence = 25;
    character.damage(20);
    expect(character.health).toBeLessThan(100);
  });

  test('Метод damage() не уводит здоровье ниже 0', () => {
    const character = new Character('Legolas', 'Bowman');
    character.defence = 0;
    character.damage(200);
    expect(character.health).toBe(0);
  });
});
