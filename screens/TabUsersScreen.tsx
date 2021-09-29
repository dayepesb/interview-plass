import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useSelector } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserItem from '../components/UserItem';
import Colors from '../res/colors';
import useDarkTheme from '../hooks/useDarkTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function TabUsersScreen() {

  const isDarkMode = useDarkTheme();

  const users = useSelector((state) => state.users);

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header_details_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
    },
    text_title: {
      color: isDarkMode ? Colors.WHITE : Colors.GREY.background,
      fontWeight: 'bold',
      fontSize: 17,
    },
    title_icon: {
      color: isDarkMode ? Colors.WHITE : Colors.GREY.background,
      fontSize: 20,
    },
  });

  return (
    <ScrollView style={styles.container}>
      {Object.keys(users).map((key) => {
        return (
          <UserItem
            key={key}
            id={key}
            name={users[key].nombre}
            lastname={users[key].apellido}
            address={users[key].direccion}
            city={users[key].ciudad}
            geoState={users[key].estadogeo}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
