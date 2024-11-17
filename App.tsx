import { Text, View, StyleSheet, Button, TextInput } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Your course goal!" />
        <Button title="Add a goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
