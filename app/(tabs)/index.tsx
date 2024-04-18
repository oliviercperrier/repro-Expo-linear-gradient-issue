import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          position: "absolute",
          height: 200,
          left: 0,
          right: 0,
        }}
        colors={["#b079d7", "rgba(115, 12, 182, 0.00)"]}
        locations={[0, 1]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
