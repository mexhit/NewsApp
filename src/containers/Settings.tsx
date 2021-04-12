import React, {useState} from 'react';
import {View} from 'react-native';
import {ButtonGroup, Text} from 'react-native-elements';

const Settings = () => {
  const buttons = ['English', 'French'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ButtonGroup
        underlayColor={'black'}
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 50}}
      />
    </View>
  );
};

export default Settings;
