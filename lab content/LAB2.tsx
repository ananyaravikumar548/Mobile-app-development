import React from 'react';
import { StyleSheet, View, ScrollView, Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { backgroundColor: isDark ? '#121212' : '#ffffff' }
      ]}
    >
      
      <View
        style={[
          styles.container,
          { backgroundColor: isDark ? '#1e1e1e' : '#dadada' }
        ]}
      >
        
        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? '#333' : '#fff' }
          ]}
        >
          <Text style={{ color: isDark ? '#fff' : '#000' }}>
            Danish
          </Text>
        </View>

        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </ScrollView>

      </View>

      <View>
        <Text style={{ color: isDark ? '#fff' : '#000' }}>
          helowwww
        </Text>
      </View>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
  },

  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: "100%",
  },

  box1: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },

  box2: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'green',
  },

  box3: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
  },

  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  }

});
