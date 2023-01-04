import React from "react";
import {View, TouchableOpacity, ScrollView, Text, Image} from 'react-native';
import Styles from '../../utilis/AppStyle';
import * as actions from '../../../store/actions';
import {useDispatch} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GiftInfo = props => {
    const account = JSON.stringify(useSelector((state) => state.appReducer));
    console.log(':::::::::::::::: ' + account);
    const giftItem = props.route.params.gift;
    const isProdFavorite = () => {
        return account.myFavorites.includes(giftItem._id);
    }

    const markAsFavorite = () => {
        const action = null;
        const dispatch = null;

        if (!isProdFavorite(giftItem._id))
        {
            action = actions.addToFavorites(giftItem._id);
            dispatch = useDispatch();
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