import { FC } from "react";
import { StatusBar, StyleProp, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IBaseContainer {
  style?: StyleProp<any>;
}

const BaseContainer: FC<IBaseContainer> = ({ children, style }) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={[
          {
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingHorizontal: 24,
          },
          style,
        ]}
      >
        {children}
      </View>
    </>
  );
};

export default BaseContainer;
