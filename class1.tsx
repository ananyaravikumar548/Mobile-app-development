import React from 'react';
import { View, Text, Image, Pressable, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Hello World</Text>

      <Image
        source={{
          uri: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
        }}
        style={{ width: 100, height: 100 }}
      /> 
      <Button title="Click Me" /> 
     
      <TouchableOpacity onPress={() => Alert.alert("TouchableOpacity pressed")}> <Text>Press Me</Text>
      </TouchableOpacity>
      <Pressable> <Text> me pressable </Text> </Pressable>
      </SafeAreaView>
  );
};

export default App;
