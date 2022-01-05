/**
 * @jest-environment jsdom
 */

import "@testing-library/react-native";

describe("jsdom test environment with real timers", () => {
  it("does not timeout", () => {
    expect(true).toBeTruthy();
  });
});
