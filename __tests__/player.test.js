import Player from '../src/player.js';

describe("Player", () => {
  const newPlayer = new Player("John", "Warrior");

  test("should correctly return an object", () => {
    expect(typeof newPlayer).toEqual("object");
  });

  test("should correctly return an object with name, class, and stats properties", () => {
    expect(newPlayer).toEqual({ name: "John", class: "Warrior", stats: {} });
  });
});