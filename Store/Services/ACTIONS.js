import CONST from "./CONST";

export const actionRegistro = values =>({
    type: CONST.REGISTER,
    data: values
});

export const actionLogin = values =>({
    type:CONST.LOGIN,
    data: values
});

export const actionSetSession = user => ({
    type: CONST.SET_SESSION,
    user,
  });
  
export const actionCloseSession = () => ({
    type:CONST.CLOSE_SESSION
});

export const actionLoadImgSignUp = image => ({
    type: CONST.LOAD_IMG_SING,
    image
  });
  
  export const actionClearImgSignUp = () => ({
    type: CONST.CLEAR_IMG_SING
  });

 
