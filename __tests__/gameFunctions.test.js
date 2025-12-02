import { rollCrit } from '../src/gameFunctions.js';

describe("rollCrit", () => {
  const rollResult = rollCrit();

  test("should return a number", () => {
    expect(typeof rollResult).toEqual("number");
  });
});