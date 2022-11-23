import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { MainStackParamList } from "./routes";

type Props = {
  navigation: NavigationProp<MainStackParamList, "Main">;
};

const Main = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("PanGesture")}>
        <Text>Pan Gesture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
