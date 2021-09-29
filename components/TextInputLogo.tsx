import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import useDarkTheme from '../hooks/useDarkTheme';

import Colors from '../res/colors';

const TextInputLogo = ({
  logoName,
  keyboardType,
  secureTextEntry,
  returnKeyType,
  autoCapitalize,
  autoCorrect,
  placeholder,
  value,
  onChangeText,
  editable,
  onPressIn,
}) => {
  const isDarkMode = useDarkTheme();

  const styles = StyleSheet.create({
    input_container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: isDarkMode ? Colors.WHITE : Colors.GREY.btnPrimary,
      justifyContent: 'flex-start',
      borderRadius: 10,
    },
    icon: {
      color: isDarkMode ? Colors.WHITE : Colors.GREY.btnPrimary,
      fontSize: 30,
      marginLeft: 5,
      marginRight: 1,
    },
    input: {
      width: 240,
      height: 40,
      color: isDarkMode ? Colors.WHITE : Colors.GREY.btnPrimary,
      fontSize: 16,
      marginLeft: 5,
      flex: 1,
    },
  });

  return (
    <View style={styles.input_container}>
      <Icon name={logoName} style={styles.icon} />
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        onPressIn={onPressIn}
      />
    </View>
  );
};

export default TextInputLogo;
