import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, Alert , TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      {/* Profile Image */}
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/1369917172/photo/young-woman-in-office-working-on-laptop-stock-photo.jpg?s=612x612&w=0&k=20&c=0fzkASX1fOw9Z5oPMGzqgVAfPQh6wMwMa1ANg9uGdXI=' }}
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.name}>Ananya Ravikumar</Text>
      <Text style={styles.subtitle}>BCA Student | RV University </Text>

      {/* Education */}
      <Text style={styles.section}>Education</Text>
      <Text>BCA (Honours) – 2024–2028</Text>

      {/* Skills */}
      <Text style={styles.section}>Skills</Text>
      <Text>Java • Python • SQL • React Native</Text>
    
    {/* projects */}
      <Text style={styles.section}>Projects</Text>
      <Text>1.Data Dashboard</Text>
      <Text>2.ML model prediction</Text>
      <Text>3.AI chatbot</Text>
      
    {/* certifications */}
      <Text style={styles.section}>Certifications</Text>
      <Text>1.Google data analytics</Text>
      <Text>2.Coursera git&github</Text>
      <Text>3.AI certification IBM </Text>
     
      {/* Buttons */}

      <TouchableOpacity style={[styles.button, { marginTop: 40 }]} >
  <Text style={styles.buttonText}>View Github</Text>
  </TouchableOpacity>

 <TouchableOpacity style={[styles.button, { marginTop: 15 }]}>
  <Text style={styles.buttonText}>Contact Me</Text>
 </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,          // fills screen
    padding: 60,
    backgroundColor: '#c7d8e0',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },

  section: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },

  buttonContainer: {
    marginTop: 40,
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#71869d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
