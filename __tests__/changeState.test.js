import { changeState } from '../src/changeState.js';

describe("changeState", () => {
  const plant = { soil: 0, light: 0, water: 0 };
  const feed = changeState("soil")(1);
  const updatedPlant = feed(plant);

  test("should correctly return an object", () => {
    expect(typeof updatedPlant).toEqual("object");
  });

  test("should correctly increment the given property", () => {
    expect(updatedPlant).toEqual({ soil: 1, light: 0, water: 0 });
  });
});