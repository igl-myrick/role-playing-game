import { rollCrit } from '../src/gameFunctions.js';

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