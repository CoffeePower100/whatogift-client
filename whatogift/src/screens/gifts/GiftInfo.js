import React from "react";
import {View, TouchableOpacity, ScrollView, Text, Image} from 'react-native';
import Styles from '../../utilis/AppStyle';
import * as actions from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GiftInfo = props => {
    const accountData = (useSelector((state) => state.appReducer));
    const account = accountData.appReducer;
    console.log(':::::::::::::::: ' + JSON.stringify(account));
    const giftItem = props.route.params.gift;
    
    const dispatch = useDispatch();

    const isProdFavorite = () => {
        console.log({_id: giftItem._id});
        console.log(account.myFavorites.includes({_id: giftItem._id}));
        return account.myFavorites.includes({_id: giftItem._id});
    }

    const markAsFavorite = () => {

        if (!isProdFavorite(giftItem._id))
        {
            const action = actions.addToFavorites(giftItem._id);
            dispatch(action);        
        }
    }

    console.log(JSON.stringify(props));

    return (
        <View style={Styles.container_nopadding}>
            <ScrollView>
            <View style={Styles.big_image_container}>
                <Image source={{uri: giftItem.productImage[0].imageSource}} style={Styles.big_image} />
            </View>

            <TouchableOpacity>
                <MaterialCommunityIcons size = {50} name={isProdFavorite() ? ("cards-heart") : ("cards-heart-outline")} onPress = {markAsFavorite}></MaterialCommunityIcons>  
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export const screenOptions = navData => {
    return {
        headerTitle: navData.route.params.gift.productName
    }
}

export default GiftInfo;