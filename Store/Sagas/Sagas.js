import { takeEvery, call,select } from 'redux-saga/effects';
import { auth , dataBase,storage} from '../Services/Firebase';
import CONST from '../Services/CONST';
import uuid from 'uuid';


const registroEnFirebase = values => (
    /** 
    * Autentificación via firebase. (Video 41) 
    * Exportamos la función de autentificación y le pasamos la función que nos proporciona firebase
    * para implementar la autentificación via email y password
    * url info: https://firebase.google.com/docs/auth/web/password-auth?authuser=1
    */
   auth.createUserWithEmailAndPassword(values.email, values.password)
        .then( success => JSON.parse(JSON.stringify(success)) ) // success.user.toJSON()

);

const registroEnBaseDeDatos = ({ uid, name,email,}) => (
  /** TODO_PRS
   * Registro en database de firebase (Video 47 Min 9)
   * Para crear el registro, indicamos que campo de la DB de firebase (ref(ruta/id))
   * Para añadir campos utilizamos el método .set({}) y le pasamos los valores que queremos guardar. TODO_PRS
   * Sobrescribe los campos que haya en dicho identificador. Si no queremos esto utilizar método .put({})
   * url info: https://firebase.google.com/docs/database/web/read-and-write?authuser=1
   */
  dataBase.ref(`usuarios/${uid}`).set({
      name,
      email,
     
  })
);

const loginEnFirebase = ({ email, password }) => (
  /**
   * Autentificamos el usuario ( Video 49 Min 13 )
   * https://firebase.google.com/docs/auth/web/password-auth
   * Utilizamos la función signInWithEmailAndPassword de firebase para hacer el login  
   */
  auth.signInWithEmailAndPassword(email, password)
      .then( success => JSON.parse(JSON.stringify(success)) )
);


/*
const registroFotoCloudinary = (imagen ) => {
  
  const { uri, type } = imagen.image;
  const splitName = uri.split('/');
  const name = [...splitName].pop();

  const foto = {
    uri,
    type,
    name,
  };
  const formImagen = new FormData();
  formImagen.append('upload_preset', CONST.CLOUD_PRESET);
  formImagen.append('file', foto);

  return fetch(CONST.CLOUD_IMG, {
    method: 'POST',
    body: formImagen,
  }).then(response => response.json());


};
*/


async function registroFotoCloudinary(imagen) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const { uri, type } = imagen.image;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = 
    storage
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}
function* generateRegister(values) {
  try {
    //cargar foto

    // con select tengo acceso al store 
    console.log("siiiiiiyea");
    
    console.log("nooooooo");

    const img = yield select((state )=> state.reducerImgSignUp);
   
    console.log(img);
    

    const urlPicture = yield call(registroFotoCloudinary,img);
    
   /*
  const registro = yield call(registroEnFirebase, values.data);
  
  const { uid,email} = registro.user;

  const { data: { name } } = values; 

  yield call(registroEnBaseDeDatos, { uid ,name,email});
 
  */

  console.log("OK registe user DB"); // TODO: Remove
  }catch(error) {
    console.log("registro error", error)
  }
}

function* sagaLogin(values){
  try {
   
    const result = yield call(loginEnFirebase,values.data);
    console.log("logeado",result );

  } catch (error) {
    console.log("peta",error );
  }
  
 
}

export default function* functionPrimaria() {
  yield takeEvery(CONST.REGISTER, generateRegister);
  yield takeEvery(CONST.LOGIN, sagaLogin);
}
