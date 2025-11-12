import { storeState } from '../src/storeState.js';
import { changeState } from '../src/changeState.js';

describe("storeState", () => {
  const stateControl = storeState();
  const feed = changeState("soil")(2);
  const feedMore = changeState("soil")(6);
  const firstState = stateControl(feed);
  const secondState = stateControl(feedMore);

  test("should correctly return an object", () => {
    expect(typeof firstState).toEqual("object");
  });

  test("should correctly store the state of a given property", () => {
    expect(firstState).toEqual({ soil: 2 });
    expect(secondState).toEqual({ soil: 8 });
  });
});