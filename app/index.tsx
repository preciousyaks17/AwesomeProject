import { Text, View, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Habibi</Text>
      <Text>Can i take you to dubai Habibi</Text>
      <Button title="Click Me" onPress={() => alert("Yes, Habibi 💃🏾")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
