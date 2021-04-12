/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootNavigation';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

const App = () => {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <SafeAreaProvider style={backgroundStyle}>
        <NavigationContainer theme={Theme}>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default App;
