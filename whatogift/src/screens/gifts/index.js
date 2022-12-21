import React, {useState} from 'react';
import Slider from "@miblanchard/react-native-slider";
import { View, Text} from 'react-native';
import Style from '../../utilis/AppStyle';


const Gifts = () => {

    const relativeNames = ["closest", "almost closest", "close", "a bit close", "unrelated"];

    const [gender, setGender] = useState(null);
    const [budgetRange, setBudgetRange] = useState({}); //Object min max
    const [events, setEvents] = useState([]); // Collection
    const [interest, setInterest] = useState([]); // Collection
    const [age, setAge] = useState(0);
    const [location, setLocation] = useState({})
    const [related, setRelated] = useState(1); //Add label


    return(
        <View style={Style.container}>
            <Slider
                value={related}
                step = {1}
                maximumValue = {5}
                onValueChange={value => setRelated(value)} />
            <Text> Value: relativeNames {related}</Text>
        </View>
    )
}

export default Gifts;