import { LOGIN, GET_OVERVIEW, GET_GIFTS } from './actions';

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                appReducer: action.data.account,
                token: action.data.userToken
            }
        case GET_GIFTS:
            return {
                ...state,
                giftsList: action.data.message
            }
        case GET_OVERVIEW:
            return {
                ...state,
                appReducer: action.data
            }
        default:
            return state;
    }
}