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

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme,
} from '@react-navigation/native';
import RootStack from './src/navigation/RootNavigation';
import {LanguageProvider} from './src/context/LanguageContext';
import {ModeProvider} from './src/context/ModeContext';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

const App = () => {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const backgroundStyle = {
    flex: 1,
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      return setTheme('light');
    }

    setTheme('dark');
  };

  return (
    <LanguageProvider value={[language, setLanguage]}>
      <ModeProvider
        value={{
          theme,
          toggleTheme,
        }}>
        <SafeAreaView
          style={[
            backgroundStyle,
            {backgroundColor: theme === 'light' ? 'white' : 'rgb(18, 18, 18)'},
          ]}>
          <SafeAreaProvider style={backgroundStyle}>
            <NavigationContainer theme={theme === 'light' ? Theme : DarkTheme}>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </SafeAreaView>
      </ModeProvider>
    </LanguageProvider>
  );
};

export default App;
