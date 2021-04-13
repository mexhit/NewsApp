import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {useTranslation} from '../modules/language';

const Settings = () => {
  const {setLanguage, language, t} = useTranslation();
  const buttons = [
    {label: 'English', key: 'en'},
    {label: 'French', key: 'fr'},
  ];

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.language}>{t('language')}</Text>
      <ButtonGroup
        underlayColor={'black'}
        onPress={(index: number) => setLanguage(buttons[index].key)}
        selectedIndex={buttons.findIndex(button => button.key === language)}
        buttons={buttons.map(button => button.label)}
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
});

export default Settings;
