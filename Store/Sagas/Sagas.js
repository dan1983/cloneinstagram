import { takeEvery, call } from 'redux-saga/effects';
import { auth , dataBase} from '../Services/Firebase';



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


function* generateRegister(values) {
  try {
  const registro = yield call(registroEnFirebase, values.data);
  //console.log("registro", registro); // TODO: Remove
  const { uid,email} = registro.user;

  const { data: { name } } = values; 

  yield call(registroEnBaseDeDatos, { uid ,name,email});
 
  

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
  yield takeEvery('REGISTER', generateRegister);
  yield takeEvery('LOGIN', sagaLogin);
}
