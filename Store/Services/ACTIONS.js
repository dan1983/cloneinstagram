import CONST from "./CONST";

export const actionREgistro = values =>({
    type: CONST.REGISTER,
    data: values
});

export const actionLogin = values =>({
    type:CONST.LOGIN,
    data: values
});

