import AsyncStorage from '@react-native-async-storage/async-storage';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_OVERVIEW = 'GET_OVERVIEW';
export const GET_GIFTS = 'GET_GIFTS';
export const GET_MY_DATA = "GET_MY_DATA";

export const logout = () => {
    AsyncStorage.removeItem('Account');
    return { type:LOGOUT }
} 

export const loginDispatch = (data) => {
    return dispatch => {
        dispatch({ type: LOGIN, data: data })
    }
}

export const getMyDataDispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_MY_DATA, data: data })
    }
}

// ip address to replace.
const PORT = 3001;
const IP_ADDRESS = `10.70.1.28:${PORT}`;

export const find_gift = (
    token, location, eventTags,
    gender, budget, interstsTags,
    age, locationRadius, related
) => {
    return async dispatch => {
        try {
            const url = `http://${IP_ADDRESS}/api/product/get_all_products`;
            const request = await fetch(url, {
                method: 'get'/*,
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    eventTags: eventTags,
                    gender: gender,
                    budget: budget,
                    interstsTags: interstsTags,
                    age: age,
                    locationRadius: locationRadius,
                    related: related
                })*/
            })
            const data = await request.json();
            console.log(data);
            if(data.status){
                dispatch(find_gift_dispatch(data))
            } else {
                console.log('No data for you');
            }
        } catch (error) {
            console.log('ERRRRRR: ' + JSON.stringify(error));
        }
    }
}

export const find_gift_dispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_GIFTS, data: data })
    }
}


export const getOverviewDispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_OVERVIEW, data: data })
    }
}

export const getMyData = (token) => {
    return async dispatch => {
        try {
            const url = `http://${IP_ADDRESS}}/api/account/get_overview`;
            const request = await fetch(url, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            const data = await request.json();

            if(data.status){
                console.log('The data: ' + JSON.stringify(data.message));
                dispatch(getMyDataDispatch(data))
            } else {
                let message = data.message;
                throw new Error(message);
            }
        } catch (error) {
            console.log('ERRRRRR: ' + JSON.stringify(error));
        }
    }
}

/*
export const getOverview = (token, location) => {
    return async dispatch => {
        try {
            const url = `http://${IP_ADDRESS}}/api/company/get_companies_by_location`;
            const request = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    latitude: location.coords.latitude,
                    longtitude: location.coords.longitude
                })
            })
            const data = await request.json();

            if(data.status){
                console.log(JSON.stringify(data));
                dispatch(getOverviewDispatch(data.message))
            } else {
                let message = data.message;
                throw new Error(message);
            }
        } catch (error) {
            console.log('ERRRRRR: ' + JSON.stringify(error));
        }
    }
}*/




export const signup = (email,password,firstName,lastName,uid) => {
    return async dispatch => {
        try {
            const url = `http://${IP_ADDRESS}/api/account/signup`;
            const request = await fetch(url, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    uid: uid
                })
            })
            const data = await request.json();
            if(data.status){
                AsyncStorage.setItem('Account', JSON.stringify({
                    token: data.token,
                    _id: data.message._id,
                    firstName: data.message.firstName,
                    lastName: data.message.lastName,
                    email: data.message.email,
                    avatar: data.message.avatar,
                    myFavorites: data.message.myFavorites
                }));
                dispatch(loginDispatch(data))
                dispatch(getMyData(data.userToken))
            } else {
                let message = data.message;
                throw new Error(message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}








export const login = (email,password) => {
    console.log('loggggin');
    return async dispatch => {
        try {
            const url = `http://${IP_ADDRESS}/api/account/login`;
            const request = await fetch(url, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await request.json();
            console.log(request);
            if(data.status){
                AsyncStorage.setItem('Account', JSON.stringify({
                    token: data.userToken,
                    _id: data.account._id,
                    firstName: data.account.firstName,
                    lastName: data.account.lastName,
                    email: data.account.email,
                    avatar: data.account.avatar,
                    myFavorites: data.account.myFavorites
                }));
                dispatch(loginDispatch(data))
            } else {
                let message = data.message;
                throw new Error(message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export const addToFavorites = (favProdId) => {
    return async dispatch => {
        let token = null;
        let id = null;
        let parsedAccountData = null;
        const account = await AsyncStorage.getItem('Account');
        if(account != null)
        {
            parsedAccountData = (JSON.parse(account));
            token = parsedAccountData.token;
            id = parsedAccountData._id;
        }

        try {
            const url = `http://${IP_ADDRESS}/api/account/add_product_to_favorites`;
            const request = await fetch(url, {
                method: 'post',
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    accountId: id,
                    favoriteProductId: favProdId
                })
            })
            const data = await request.json();
            if(data && (data.status)){
                dispatch(loginDispatch(data))
                dispatch(getMyData(data.userToken))
            } 
            else 
            {
                let message = data.message;
                throw new Error(message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}