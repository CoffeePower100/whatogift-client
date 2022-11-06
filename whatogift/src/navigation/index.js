//IMPORT NAVIGATION LIBS:
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//IMPORT ICONS:
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//IMPORT SCREENS:
import Dashboard from "../screens/dashboard";
import Test from "../screens/dashboard/Test";
import Gifts from "../screens/gifts";
import Favorites from "../screens/favorites";
import Profile from "../screens/profile";

//IMPORT STACK:
const DashboardStackNavigator = createNativeStackNavigator();
export const DashboardStack = () => {
    return (
        <DashboardStackNavigator.Navigator>
            <DashboardStackNavigator.Screen name = 'dashboard' component = {Dashboard} />
            <DashboardStackNavigator.Screen> name = 'test component = {Test}</DashboardStackNavigator.Screen>
        </DashboardStackNavigator.Navigator>
    )
}

//CREATE TABS:
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTab.Navigator>
            <AppTab.Screen name = 'dashboardTab' component={Dashboard} 
            options = {{tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommunityIcons name = 'view-grid' size = {28} />)}} />
            <AppTab.Screen name = 'giftsTab' component={Gifts} 
            options = {{tabBarLabel: 'Gifts', tabBarIcon: () => (<MaterialCommunityIcons name = 'view-grid' size = {28} />)}} />
            <AppTab.Screen name = 'favoritesTab' component={Favorites} 
            options = {{tabBarLabel: 'Favorites', tabBarIcon: () => (<MaterialCommunityIcons name = 'view-grid' size = {28} />)}} />
            <AppTab.Screen name = 'Profile' component={Profile} 
            options = {{tabBarLabel: 'Profiles', tabBarIcon: () => (<MaterialCommunityIcons name = 'view-grid' size = {28} />)}} />
        </AppTab.Navigator>
    )
}