/**
 * @jest-environment node
 */

import "@testing-library/react-native";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("node test environment with fake timers", () => {
  it("does not timeout", () => {
    expect(true).toBeTruthy();
  });
});
