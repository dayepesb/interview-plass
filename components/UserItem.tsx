import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Pressable, StyleSheet, Text, View
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { GEO_USER_SCREEN_NAME } from '../constants/Routes';
import useDarkTheme from '../hooks/useDarkTheme';
import { deleteUser } from '../redux/actions';
import Colors from '../res/colors';
import CustomCard from './CustomCard';

const UserItem = (props) => {
  const {
    id,
    name,
    lastname,
    address,
    city,
    geoState,
    deleteUser,
  } = props;

  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate(GEO_USER_SCREEN_NAME, { id: id } );
  };

  const isDarkMode = useDarkTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    text: {
      color: isDarkMode ? Colors.WHITE : Colors.GREY.background,
    },
    text_title: {
      color: isDarkMode ? Colors.WHITE : Colors.GREY.background,
      fontWeight: 'bold',
    },
    text_subtitle: {
      color: isDarkMode ? Colors.GREY.whiteish : Colors.GREY.background,
      marginBottom: 10,
    },
    badge_style: {
      backgroundColor: Colors.BLUE.Deep_Blue,
      height: 20,
      width: 80,
    },
    badge_text_style: {
      fontSize: 14,
    },
    button_container: {
      margin: 0,
      paddingTop: 10,
      color: 'red'
    },
  });

  const handleDeleteUser = () => {
    console.log('Delete User', id);
    deleteUser(id);
    console.log('asdsadasd')
  }

  return (
    <Pressable onPress={navigateToDetails}>
      <CustomCard>
        <View style={styles.container}>
          <View style={styles.header_container}>
            <Text style={styles.text_title}>Name:</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.text_title}>LastName:</Text>
            <Text style={styles.text}>{lastname}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.text_title}>Address:</Text>
            <Text style={styles.text}>{address}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.text_title}>City:</Text>
            <Text style={styles.text}>{city}</Text>
          </View>
          <View style={styles.header_container}>
            <Text style={styles.text_title}>Georeference:</Text>
            <Text style={styles.text}>{geoState ? `Georreferenciado` : `No Georreferenciado` }</Text>
          </View>
          <Button
            titleStyle={{
              color: Colors.RED.button
            }}
            title={'Delete'}
            onPress={handleDeleteUser}
            style={styles.button_container}
            type="clear"
            icon={
              <Icon
                name="trash"
                size={15}
                color={Colors.RED.button}
                style={{
                  marginRight: 10
                }}
              />
            }
          />
        </View>
      </CustomCard>
    </Pressable>
  );
};
const mapDispatchToProps = {
  deleteUser,
};

export default connect(null, mapDispatchToProps)(UserItem);
