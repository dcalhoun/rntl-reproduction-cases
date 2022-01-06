import * as React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";

export default function App({ onTouchStart, onTouchEnd, onChildPress }) {
  return (
    <View
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
      pointerEvents="box-none"
      style={styles.container}
      testID="parent-container"
    >
      <Pressable onPress={onChildPress} style={styles.pressable}>
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "yellow",
    padding: 8,
  },
  pressable: {
    backgroundColor: "orange",
    padding: 16,
  },
});

describe("when element has box-none pointerEvents", () => {
  it("triggers onTouchStart handler", () => {
    const onTouchStart = jest.fn();
    const screen = render(<App onTouchStart={onTouchStart} />);
    const parentContainer = screen.getByTestId("parent-container");
    fireEvent(parentContainer, "touchStart");

    expect(onTouchStart).toHaveBeenCalled();
  });

  it("triggers onTouchStart handler", () => {
    const onTouchEnd = jest.fn();
    const screen = render(<App onTouchEnd={onTouchEnd} />);
    const parentContainer = screen.getByTestId("parent-container");
    fireEvent(parentContainer, "touchEnd");

    expect(onTouchEnd).toHaveBeenCalled();
  });

  it("allows child to trigger onPress handler", () => {
    const onChildPress = jest.fn();
    const screen = render(<App onChildPress={onChildPress} />);
    const pressable = screen.getByText("Press me");
    fireEvent.press(pressable);

    expect(onChildPress).toHaveBeenCalled();
  });
});
