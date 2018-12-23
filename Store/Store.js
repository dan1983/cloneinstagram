import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';
import CONST from './Services/CONST';


const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};

const reducerSesion = (state = null, action) => {
  switch (action.type) {
    case CONST.SET_SESSION:
      return action.user;
    case CONST.CLOSE_SESSION:
      return null;
    default:
      return state;
  }
};

const sagaMiddleware = createMiddleware();

const reducers = combineReducers({
  reducerPrueba,
  form,

});


const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimaria);

export default store;
