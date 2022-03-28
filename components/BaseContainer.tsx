import { FC } from "react";
import {
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IBaseContainer {
  style?: StyleProp<ViewStyle>;
  optins?: Omit<ScrollViewProps, "contentContainerStyle | style"> & {
    bounceBackgroundColor?: string;
  };
}

const BaseContainer: FC<IBaseContainer> = ({ children, style, optins }) => {
  const insets = useSafeAreaInsets();

  const contentContainerStyle = StyleSheet.flatten([
    styles.container,
    { paddingTop: insets.top, paddingBottom: insets.bottom },
    style,
  ]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={{
          backgroundColor: optins?.bounceBackgroundColor || "white",
        }}
        {...optins}
        contentContainerStyle={contentContainerStyle}
      >
        {children}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default BaseContainer;
