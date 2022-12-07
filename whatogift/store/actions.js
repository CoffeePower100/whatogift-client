import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN = 'LOGIN';

export const loginDispatch = (data) => {
    return dispatch => {
        dispatch({type: LOGIN, data: data})
    }
}

export const login = (email, password) => {
    return async dispatch => { 
        try {
            const url = 'http://10.70.1.241:3001/api/account/login';
            const request = await fetch(url, {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await request.json();
            if (data.status)
            {
                console.log(data.message);
                AsyncStorage.setItem('Account', JSON.stringify({
                    token: data.userToken,
                    _id: data.account.id,
                    firstName: data.account.firstName,
                    lastName: data.account.lastName,
                    email: data.account.email,
                    avatar: data.account.avatar
                }));
                dispatch(loginDispatch(data))
            }
            else
            {
                let message = data.message;
                throw new Error(message);
            }
        } catch(error) {
            throw new Error(error.message);
        }
    }
}