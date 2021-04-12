import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Home from '../containers/Home';
import Details from '../containers/Details';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../containers/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Details: {
    title: string;
  };
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
