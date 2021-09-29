import Firebase from '../../firebase';
import { SET_USERS } from '../types';

const firebase = Firebase;

const getUserList = () => (dispatch) => {
  firebase.database()
    .ref('/usuarios')
    .on('value', (snapshot) => {
      dispatch({
        type: SET_USERS,
        payload: snapshot.val(),
      });
    });
};

const addUser = (user) => (dispatch) => {
  firebase.database()
    .ref('/usuarios')
    .push({
      ...user,
      estadogeo: false,
    });
}

const deleteUser = (id) => (dispatch) => {
  console.log('remove ', id)
  firebase.database()
    .ref(`/usuarios/${id}`)
    .remove();
}

const geoRefUser = ({id, latitud, longitud}) => (dispatch) => {
  console.log('Geo Ref ', id)
  firebase.database()
    .ref(`/usuarios/${id}`)
    .update({
      latitud,
      longitud,
      estadogeo: true,
    })
}
export {
  getUserList,
  addUser,
  deleteUser,
  geoRefUser,
};
