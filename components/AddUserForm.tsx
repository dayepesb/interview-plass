import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import useDarkTheme from '../hooks/useDarkTheme';
import Colors from '../res/colors';
import TextInputLogo from './TextInputLogo';

export default function AddUserForm() {
  

  const [name, setName] = useState();

  const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      justifyContent: 'center',
    },
    icon_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon_header: {
      color: isDarkMode ? Colors.LIGHT_TEXT : Colors.GREY.btnPrimary,
      fontSize: 80,
    },
    input_container: {
      marginTop: 15,
    },
    text: {
      color: isDarkMode ? Colors.LIGHT_TEXT : Colors.GREY.btnPrimary,
    },
    link_container: {
      flexDirection: 'row',
      marginTop: 20,
    },
    button_styles: {
      marginTop: 20,
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.main_container}>
      <View style={styles.input_container}>
        <Text style={styles.text}>{'Name'}</Text>
        <TextInputLogo
          logoName="user"
          autoCapitalize="words"
          returnKeyType="done"
          autoCorrect={false}
          autoCompleteType="name"
          placeholder="Juan Rodriguez"
          value={name}
          onChangeText={setName}
        />
      </View>
    </View>
  );
};
