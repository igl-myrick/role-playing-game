import Player from '../src/player.js';

describe("Player", () => {
  const newPlayer = new Player("John", "Warrior");

  test("should correctly return an object", () => {
    expect(typeof newPlayer).toEqual("object");
  });

  test("should correctly return an object with name, class, and stats properties", () => {
    expect(newPlayer).toEqual({ name: "John", class: "Warrior", stats: {} });
  });

  describe("Player.determineStats", () => {
    test("should correctly assign stats based on user's class", () => {
      const player1 = new Player("John", "Warrior");
      const player2 = new Player("Jane", "Spellsword");
      const player3 = new Player("Jack", "Archer");
      const player4 = new Player("Jill", "Mage");

      player1.determineStats("Warrior");
      player2.determineStats("Spellsword");
      player3.determineStats("Archer");
      player4.determineStats("Mage");

      expect(player1.stats).toEqual({ hp: 100, atk: 60, def: 40, spAtk: 0, spDef: 20, critRate: 5 });
      expect(player2.stats).toEqual({ hp: 100, atk: 0, def: 40, spAtk: 20, spDef: 60, critRate: 5 });
      expect(player3.stats).toEqual({ hp: 100, atk: 60, def: 15, spAtk: 0, spDef: 30, critRate: 10 });
      expect(player4.stats).toEqual({ hp: 100, atk: 0, def: 15, spAtk: 60, spDef: 30, critRate: 10 });
    });
  });

  describe("Player.rollCrit", () => {
    test("should return a number between 1 and 10", () => {
      const player1 = new Player("John", "Warrior");
      const rollResult = player1.rollCrit();
      expect(rollResult).toBeGreaterThan(0)
      expect(rollResult).toBeLessThan(11);
    });
  });
})