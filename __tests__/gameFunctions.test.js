import { handleCombat, rollCrit } from '../src/gameFunctions.js';

describe("rollCrit", () => {
  const rollResult = rollCrit();

  test("should return a number", () => {
    expect(typeof rollResult).toEqual("number");
  });

  test("should return a number between 1 and 10", () => {
    expect(rollResult).toBeGreaterThan(0);
    expect(rollResult).toBeLessThan(11);
  });
});

describe("handleCombat", () => {
  const playerAtk = 60;
  const opponentDef = 20;
  const combatResult = handleCombat(playerAtk, opponentDef);

  test("should return a number", () => {
    expect(typeof combatResult).toEqual("number");
  });

  test("should correctly return a number based on the function's formula", () => {
    expect(combatResult).toEqual(9);
  });
});