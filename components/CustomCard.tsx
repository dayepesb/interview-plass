import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

import useDarkTheme from '../hooks/useDarkTheme';
import Color from '../res/colors';

const CustomCard = ({ children }) => {
  const isDarkMode = useDarkTheme();

  const styles = StyleSheet.create({
    card_container: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    card: {
      backgroundColor: isDarkMode ? Color.GREY.background : Color.GREY.whiteish,
      borderColor: isDarkMode ? Color.GREY.background : Color.GREY.backgroundLight,
      borderRadius: 15,
      flex: 1,
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    card_wrapper: {
      flexDirection: 'row',
    },
  });
  return (
    <View style={styles.card_container}>
      <Card containerStyle={styles.card} wrapperStyle={styles.card_wrapper}>
        {children}
      </Card>
    </View>
  );
};

export default CustomCard;
