# RNTL jsdom Fake Timers

This is a reproduction of an timeout error that occurs while using `@testing-library/react-native` and combining `testEnvironment: 'jsdom'` and fake timers, regardless of "legacy" or "modern" timers. The result is the following error. It would appear that `setImmediate` does not perform as expected, breaking the built-in [`cleanup` functionality](https://github.com/callstack/react-native-testing-library/blob/c42bae123d69375e27b94ff0329380a13e31e87b/src/index.js#L13) of `@testing-library/react-native`.

```
> rntl-jsdom-fake-timers@0.0.1 test
> jest

 PASS  ./node-real-timers.test.js
 PASS  ./node-fake-timers.test.js
 PASS  ./jsdom-real-timers.test.js
 FAIL  ./jsdom-fake-timers.test.js (5.829 s)
  ● jsdom test environment with fake timers › does not timeout

    thrown: "Exceeded timeout of 5000 ms for a hook.
    Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."

      3 |  */
      4 |
    > 5 | import "@testing-library/react-native";
        | ^
      6 |
      7 | beforeEach(() => {
      8 |   jest.useFakeTimers();

      at Object.<anonymous> (node_modules/@testing-library/react-native/build/index.js:29:3)
      at Object.<anonymous> (jsdom-fake-timers.test.js:5:1)

Test Suites: 1 failed, 3 passed, 4 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        6.732 s
Ran all test suites.
```
