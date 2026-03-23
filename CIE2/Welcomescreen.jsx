import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Background Circles */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.logo}>☬argon</Text>

        <Text style={styles.title}>Design System</Text>

        <Text style={styles.subtitle}>
          Fully coded React Native components
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96b696',
    justifyContent: 'center',
    alignItems: 'center'
  },

  content: {
    alignItems: 'center'
  },

  /* Background circles */
  circle1: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255,255,255,0.15)',
    top: -50,
    left: -50
  },

  circle2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.1)',
    bottom: -40,
    right: -40
  },

  logo: {
    fontSize: 60,
    color: '#ffffffcc',
    marginBottom: 20,
    letterSpacing: 2
  },

  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  subtitle: {
    fontSize: 20,
    color: '#ffffffcc',
    marginTop: 10,
    marginBottom: 50,
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 25,
    elevation: 5
  },

  buttonText: {
    color: '#070d06',
    fontWeight: 'bold',
    fontSize: 16
  }
});
