import React, {useEffect,useCallback, useState} from 'react'
import { View, Text, Button} from 'react-native';
import Style from '../../utilis/AppStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utilis/AppColors';

import firebase from "../../utilis/firebaseConfig";

const Dashboard = (props) => {
    const user = firebase.auth().currentUser();

    const [token, setToken] = useState('');

    const getDataFromAsync = useCallback(async ()=> {
        const dataFromAsync = await AsyncStorage.getItem('Account');
        if(dataFromAsync != null){
            const data = JSON.parse(dataFromAsync);
            setToken(data.token);

        }
    },[setToken])

    useEffect(() => {
        getDataFromAsync();
    },[getDataFromAsync])

    console.log(token);

    return(
        <View style={Style.container}>
            <Text>{user.email}</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go TO TEST' />
        </View>
    )
}

export const screenOptions = (navData) => {
   return {
        headerTitle: 'Overview',
        headerShown: true,
        headerRight: () => (
            <MaterialIcons onPress={() => {navData.navigation.navigate('test')}} name = 'settings' color={Colors.white} size={28} />
        )
   } 
}

export default Dashboard;