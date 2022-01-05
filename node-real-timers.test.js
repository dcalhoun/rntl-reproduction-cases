/**
 * @jest-environment node
 */

import "@testing-library/react-native";

describe("node test environment with real timers", () => {
  it("does not timeout", () => {
    expect(true).toBeTruthy();
  });
});
