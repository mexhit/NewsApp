import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {useTranslation} from '../modules/language';
import useTheme from '../modules/theme';

const Settings = () => {
  const {setLanguage, language, t} = useTranslation();
  const {theme, toggleTheme, textStyle} = useTheme();
  const buttons = [
    {label: 'English', key: 'en'},
    {label: 'French', key: 'fr'},
  ];

  const modes = [
    {label: 'Light', key: 'light'},
    {label: 'Dark', key: 'dark'},
  ];

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={[textStyle, styles.language]}>{t('language')}</Text>
      <ButtonGroup
        underlayColor={'black'}
        onPress={(index: number) => setLanguage(buttons[index].key)}
        selectedIndex={buttons.findIndex(button => button.key === language)}
        buttons={buttons.map(button => button.label)}
        containerStyle={{height: 50}}
      />
      <View style={styles.divider} />
      <Text style={[textStyle, styles.language]}>Mode</Text>
      <ButtonGroup
        underlayColor={'black'}
        onPress={toggleTheme}
        selectedIndex={modes.findIndex(mode => mode.key === theme)}
        buttons={modes.map(mode => mode.label)}
        containerStyle={{height: 50}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  language: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    height: 30,
  },
});

export default Settings;
