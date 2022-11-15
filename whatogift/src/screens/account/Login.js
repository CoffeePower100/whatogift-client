import react, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, Alert} from 'react-native';
import {TextInput, Button, Colors} from 'react-native-paper';
import Style from '../../utilis/AppStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if(errorMsg){
            Alert.alert('Login', errorMsg);
        }
    },[errorMsg])

    const login = async() => {
        setIsLoading(true);  
        if(email != "" && password != ""){
            try {
                const url = 'http://localhost:3001/api/account/login';
                const response = await fetch(url, {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
                const data = await response.json();
                if(data.status){
                    //setErrorMsg(data.token);

                    AsyncStorage.setItem('Token', JSON.stringify({
                        token: data.token
                    }))

                    // const overview_url = 'http://localhost:3001/api/account/getOverview';
                    // const overview_response = await fetch(overview_url, {
                    //     method: 'get',
                    //     headers: {
                    //         'Content-Type' : 'application/json',
                    //         'Authorization' : `Bearer ${data.token}`
                    //     }  
                    // });
                    // const overview_data = await overview_response.json(); 
                    // setErrorMsg(overview_data.error);

                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                    setErrorMsg(data.error);
                }
            } catch (error) {
                setIsLoading(false);
                setErrorMsg(error.message);
            }
        } else {
            setIsLoading(false);
            setErrorMsg('All inputs required');
        }     
    }

    return(
        <View style={Style.container}>
            <Text style={{fontSize:24, fontWeight:'700', marginBottom:30}}>Login</Text>

        <TextInput
            value = {email} onChangeText = {text => {setEmail(text)}}
            label="Email"
            keyboardType='email-address'
            autoCapitalize = 'none' 
            right={<TextInput.Icon icon = "email"/>} 
        />

        <TextInput
            value = {password} onChangeText = {text => {setPassword(text)}}
            label="Password"
            keyboardType='default'
            autoCapitalize='none'
            secureTextEntry 
            right={<TextInput.Icon icon = "eye"/>} 
        />

        {
            isLoading ? (<ActivityIndicator color={Colors.ocean} size="large" />) :  
            <Button icon='send' mode="contained" onPress={login}><Text>LOGIN</Text></Button>
        }
        </View>
    )
}

export default Login;