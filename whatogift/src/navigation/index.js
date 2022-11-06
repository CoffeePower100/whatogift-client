//IMPORT NAVIGATION LIBS:
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//IMPORT ICONS:
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//IMPORT SCREENS:
import Dashboard from "../screens/dashboard";
import Gifts from "../screens/gifts";
import Favorites from "../screens/favorites";
import Profile from "../screens/profile";

//CREATE TABS:
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTab.Navigator>
            <AppTab.Screen name = 'dashboardTab' component={Dashboard} 
            options = {{tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommunityIcons name = 'view-grid' size = {28} />)}} />
        </AppTab.Navigator>
    )
}