import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';
import CONST from './Services/CONST';


const reducerPrueba = (state = null, action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};

const reducerSesion = (state = null, action) => {
  console.log("antes");
  console.log(action);
  console.log("despues");
  switch (action.type) {
    case CONST.SET_SESSION:
      return action.usuario;
    case CONST.CLOSE_SESSION:
      return null;
    default:
      return state;
  }
};

const sagaMiddleware = createMiddleware();

const reducers = combineReducers({
  reducerSesion,
  reducerPrueba,
  form,

});


const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimaria);

export default store;
