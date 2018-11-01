import { takeEvery, call } from 'redux-saga/effects';
import { auth } from '../Services/Firebase';

const registroEnFirebase = values => auth
  .createUserWithEmailAndPassword(values.email, values.password)
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    // ...
  });

function* generateRegister(values) {
  yield call(registroEnFirebase, values.data);
}

export default function* functionPrimaria() {
  yield takeEvery('REGISTER', generateRegister);
}
