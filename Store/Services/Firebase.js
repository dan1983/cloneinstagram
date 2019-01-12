

import * as firebase from 'firebase';
import { config } from './config';


const conf = config;


firebase.initializeApp(conf);

export const auth = firebase.auth();
export const dataBase = firebase.database();
export const storage = firebase.storage();
