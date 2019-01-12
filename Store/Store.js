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
 
  switch (action.type) {
    case CONST.SET_SESSION:
      return action.user;
    case CONST.CLOSE_SESSION:
      return null;
    default:
      return state;
  }
};

const reducerImgSignUp = (state = { image: null} ,action) => {
  switch(action.type) {
    case  CONST.CLEAR_IMG_SING:
    return { image: null} 
    case CONST.LOAD_IMG_SING:
   
    return { image: action.image} ;
    default:
    return state;
    break;
  }

}



const sagaMiddleware = createMiddleware();

const reducers = combineReducers({
  reducerImgSignUp,
  reducerSesion,
  reducerPrueba,
  form,

});


const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimaria);

export default store;
