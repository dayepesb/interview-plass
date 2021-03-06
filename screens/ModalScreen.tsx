import * as React from 'react';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import AddUserForm from '../components/AddUserForm';
import TextInputLogo from '../components/TextInputLogo';
import { Text, View } from '../components/Themed';
import useDarkTheme from '../hooks/useDarkTheme';
import { Button } from 'react-native-elements';
import Colors from '../res/colors';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions';
import { USER_SCREEN_NAME } from '../constants/Routes';
import { useNavigation } from '@react-navigation/native';

const ModalScreen = (props) => {

  const {
    addUser,
  } = props;

  const navigation = useNavigation();

  const isDarkMode = useDarkTheme();

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddess] = useState();
  const [city, setCity] = useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      marginTop: 0,
    },
    button_styles: {
      marginTop: 20,
      marginBottom: 20,
    },
  });

  const handleAddUser = () => {
    console.log('add user');
    const dataUser = {
      nombre: name, apellido: lastName, direccion: address, ciudad: city
    };
    addUser(dataUser);
    navigation.navigate('Root');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.input_container}>
        <Text style={styles.text}>{'Name'}</Text>
        <TextInputLogo
          logoName="user"
          autoCapitalize="words"
          returnKeyType="done"
          autoCorrect={false}
          autoCompleteType="name"
          placeholder="Juan"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.input_container}>
        <Text style={styles.text}>{'Lasdt Name'}</Text>
        <TextInputLogo
          logoName="user"
          autoCapitalize="words"
          returnKeyType="done"
          autoCorrect={false}
          autoCompleteType="name"
          placeholder="Rodriguez"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.input_container}>
        <Text style={styles.text}>{'Adrress'}</Text>
        <TextInputLogo
          logoName="exclamation"
          autoCapitalize="words"
          returnKeyType="done"
          autoCorrect={false}
          autoCompleteType="address"
          placeholder="Cll 91 # 90 - 63"
          value={address}
          onChangeText={setAddess}
        />
      </View>
      <View style={styles.input_container}>
        <Text style={styles.text}>{'City'}</Text>
        <TextInputLogo
          logoName="exclamation"
          autoCapitalize="words"
          returnKeyType="done"
          autoCorrect={false}
          autoCompleteType="city"
          placeholder="Bogota D.C"
          value={city}
          onChangeText={setCity}
        />
      </View>
      <Button
        titleStyle={{
          color: Colors.BLUE.secondary
        }}
        title={'Add User'}
        onPress={handleAddUser}
        type="clear"
      />
    </ScrollView>
  );
}

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(ModalScreen);
