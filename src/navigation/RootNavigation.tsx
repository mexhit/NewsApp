import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import Home from '../containers/Home';
import Details from '../containers/Details';

const Stack = createStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Details: {
    title: string;
  };
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default RootStack;
