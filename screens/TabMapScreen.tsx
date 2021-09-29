import * as React from 'react';
import { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { connect, useSelector } from 'react-redux';
import { View } from '../components/Themed';
import useDarkTheme from '../hooks/useDarkTheme';
import { getUserList } from '../redux/actions';
import { mapDark } from '../res/mapStyles';

const TabMapScreen = (props: any) => {

  const {
    getUserList,
  } = props;

  const isDarkMode = useDarkTheme();

  const users = useSelector((state) => state.users);

  const mapStyle = isDarkMode ? mapDark : [];

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
      >
        {Object.keys(users).map((key) => {

          if(users[key].latitud !== undefined && users[key].longitud !== undefined) {
            const latitude = users[key].latitud;
            const longitude = users[key].longitud;
  
            return (
              <Marker coordinate={{ latitude, longitude }} key={key} />
            )
          }
        })}
      </MapView>
    </View>
  );
}

const mapDispatchToProps = {
  getUserList,
};

export default connect(null, mapDispatchToProps)(TabMapScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-70,
  },
});