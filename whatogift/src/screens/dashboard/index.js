import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Style from "../../utilis/AppStyle";

const Dashboard = (props) => {
  return (
    <View style={Style.container}>
      <Text></Text>
      <Button onPress = {() => {props.navigation.navigate('test')}} title = 'Go To Test' />
    </View>
  );
}

export default Dashboard;