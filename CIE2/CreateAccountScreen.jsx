import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function CreateAccountScreen({ navigation }) {
  const [agree, setAgree] = useState(false);

  // Function to handle account creation
  const handleCreateAccount = () => {
    Alert.alert(
      "Success",
      "Account created successfully!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate('Welcome') // go back to home
        }
      ]
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Create Account</Text>

      {/* Social Buttons Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.socialBtn}>
          <Text>🐙 GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Text>🔍 Google</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.separator}>
        Or sign up with credentials
      </Text>

      {/* Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.icon}>👤</Text>
        <TextInput
          placeholder="Enter Name"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.icon}>📧</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.icon}>🔒</Text>
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Text style={styles.strength}>
        Password strength: Strong
      </Text>

      {/* Checkbox */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setAgree(!agree)}
      >
        <Text style={styles.checkbox}>
          {agree ? '☑' : '☐'}
        </Text>
        <Text>I agree with Privacy Policy</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleCreateAccount}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Back */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Go Back</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96b696',
    padding: 20,
    justifyContent: 'center'
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  socialBtn: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    elevation: 3
  },

  separator: {
    textAlign: 'center',
    marginVertical: 15,
    color: 'gray'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 10,
    elevation: 3
  },

  icon: {
    marginRight: 8,
    fontSize: 16
  },

  input: {
    flex: 1,
    padding: 12,
    color: '#000'
  },

  strength: {
    color: 'green',
    marginBottom: 10
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },

  checkbox: {
    marginRight: 8
  },

  button: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10
  },

  buttonText: {
    color: '#141212',
    fontWeight: 'bold'
  },

  back: {
    textAlign: 'center',
    marginTop: 15,
    color: 'black'
  }
});
