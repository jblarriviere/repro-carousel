import { Dimensions, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import React from "react";

const workingOnBeginDrag = () => {
  "worklet";
  console.log("onBeginDrag");
};

const crashingOnBeginDrag = () => {
  "worklet";
  runOnJS(console.log)("onBeginDrag");
};

const logDragBegin = () => console.log("logDragBegin");

const workingOnBeginDrag2 = () => {
  "worklet";
  runOnJS(logDragBegin)();
};

const crashingOnBeginDrag2 = () => {
  "worklet";
  logDragBegin();
};

const App = () => {
  const { width: scrollViewItemWidth, height: scrollViewItemHeight } =
    Dimensions.get("screen");

  const handler = useAnimatedScrollHandler({
    onBeginDrag: crashingOnBeginDrag2,
  });

  return (
    <Animated.ScrollView onScroll={handler}>
      <View
        style={{
          width: scrollViewItemWidth,
          height: scrollViewItemHeight,
          backgroundColor: "blue",
        }}
      />
    </Animated.ScrollView>
  );
};

export default App;
