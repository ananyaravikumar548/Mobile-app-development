import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView
} from 'react-native';

// Import JSON data
import students from './students.json';

const App = () => {

  // Function to render each student card
  const renderStudent = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Grade:</Text>
          <Text style={styles.value}>{item.grade}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Section:</Text>
          <Text style={styles.value}>{item.section}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Student Directory</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderStudent}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

export default App;
