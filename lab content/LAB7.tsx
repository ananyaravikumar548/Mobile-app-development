import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    navigation.navigate("Student", { studentName: name });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
