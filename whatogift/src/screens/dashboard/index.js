import React, {useEffect, useCallback, useState} from 'react';
import { Text, View, Button} from 'react-native';
import Style from "../../utilis/AppStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = (props) => {
  
  const [token, setToken]  = useState('');

  useEffect(() => {
    getDataFromAsync();
  }, [getDataFromAsync])
  
  const getDataFromAsync = useCallback(async () => {
    const dataFromAsync = await AsyncStorage.getItem('Token');
    if (dataFromAsync != null)
    {
      const data = JSON.parse(dataFromAsync);
      setToken(data.token);
    }
  },[setToken]);

  return (
    <View style={Style.container}>
      <Text></Text>
      <Button onPress = {() => {props.navigation.navigate('test')}} title = 'Go To Test' />
    </View>
  );
}

export default Dashboard;