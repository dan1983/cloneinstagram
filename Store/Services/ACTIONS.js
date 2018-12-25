import CONST from "./CONST";

export const actionRegistro = values =>({
    type: CONST.REGISTER,
    data: values
});

export const actionLogin = values =>({
    type:CONST.LOGIN,
    data: values
});

export const actionSetSession = usuario => ({
    type: CONST.SET_SESSION,
    usuario,
  });
  
export const actionCloseSession = () => ({
    type:CONST.CLOSE_SESSION
})

