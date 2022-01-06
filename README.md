# RNTL Reproduction Case

Setting `pointerEvents: 'box-none'` on a `View` prohibits triggering `onTouch*` events on the `View`. This behavior differs from React Native itself. This [Expo Snack](https://snack.expo.dev/@davidcalhoun/pointerevents-and-ontouch-events) showcases that pressing the child `Pressable` of a `<View pointerEvents="box-none" />` still triggers the `onTouchStart` and `onTouchEnd` events. This change in behavior, which appears to differ from React Native, began in with `7.2.0` due to changes in https://github.com/callstack/react-native-testing-library/pull/655.

## Project Setup

1. `npm install`
1. `npm run test`
