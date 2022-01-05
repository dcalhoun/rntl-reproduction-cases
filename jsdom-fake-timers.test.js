/**
 * @jest-environment jsdom
 */

import "@testing-library/react-native";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("jsdom test environment with fake timers", () => {
  it("does not timeout", () => {
    expect(true).toBeTruthy();
  });
});
