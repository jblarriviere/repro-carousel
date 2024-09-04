import { Dimensions, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import React, { useCallback } from "react";

const App = () => {
  const { width: scrollViewItemWidth } = Dimensions.get("screen");
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const intervalId = useSharedValue<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  const startInterval = useCallback(() => {
    intervalId.value = setInterval(() => {
      //scroll to next view or first view if we're on the last one, not relevant here
      return null;
    }, 7000);
  }, [intervalId]);

  const removeInterval = useCallback(() => {
    clearInterval(intervalId.value);
  }, [intervalId]);

  const handler = useAnimatedScrollHandler({
    onBeginDrag: () => {
      "worklet";

      // This crashes with new arch enabled but works when disabled
      runOnJS(clearInterval)(intervalId.value);

      //This seems to work on both new and old arch
      runOnJS(removeInterval)();
    },
    onEndDrag: () => {
      "worklet";

      runOnJS(startInterval)();
    },
  });

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onScroll={handler}
      horizontal
      pagingEnabled
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: scrollViewItemWidth,
            backgroundColor: "red",
          }}
        />
        <View
          style={{
            width: scrollViewItemWidth,
            backgroundColor: "green",
          }}
        />
        <View
          style={{
            width: scrollViewItemWidth,
            backgroundColor: "blue",
          }}
        />
      </View>
    </Animated.ScrollView>
  );
};

export default App;
