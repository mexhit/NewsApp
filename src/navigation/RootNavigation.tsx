import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Home from '../containers/Home';
import Details from '../containers/Details';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../containers/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from '../modules/language';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Details: {
    title: string;
  };
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function MainStack() {
  const {t} = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: t('details')}}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: t('settings')}}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const {t} = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="News"
        component={MainStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarLabel: t('news'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: t('settings'),
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
