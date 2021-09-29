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
import { geoRefUser } from '../redux/actions';
import { USER_SCREEN_NAME } from '../constants/Routes';
import { useNavigation, useRoute } from '@react-navigation/native';

const GeoRefScreen = (props) => {

  const route = useRoute();

  const { id } = route.params;

  const {
    geoRefUser,
  } = props;

  const navigation = useNavigation();

  const isDarkMode = useDarkTheme();

  const [latitud, setLatitud] = useState();
  const [longitud, setLongitud] = useState();

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
    console.log('geo user');
    const dataUser = {
      id, latitud, longitud
    };
    geoRefUser(dataUser);
    navigation.navigate('Root');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.input_container}>
        <Text style={styles.text}>{'Latitude'}</Text>
        <TextInputLogo
          logoName="user"
          autoCapitalize="words"
          returnKeyType="done"
          autoCorrect={false}
          autoCompleteType="name"
          placeholder="0.0000000"
          value={latitud}
          onChangeText={setLatitud}
        />
      </View>
      <View style={styles.input_container}>
        <Text style={styles.text}>{'Longitude'}</Text>
        <TextInputLogo
          logoName="user"
          autoCapitalize="words"
          returnKeyType="done"
          autoCorrect={false}
          autoCompleteType="name"
          placeholder="0.0000000"
          value={longitud}
          onChangeText={setLongitud}
        />
      </View>
      <Button
        titleStyle={{
          color: Colors.BLUE.secondary
        }}
        title={'Geo Ref User'}
        onPress={handleAddUser}
        type="clear"
      />
    </ScrollView>
  );
}

const mapDispatchToProps = {
  geoRefUser,
};

export default connect(null, mapDispatchToProps)(GeoRefScreen);
