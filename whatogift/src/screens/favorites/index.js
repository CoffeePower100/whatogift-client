import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Style from "../../utilis/AppStyle";

const Favorites = () => {
  return (
    <View style={Style.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Favorites;