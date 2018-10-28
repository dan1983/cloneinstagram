

import * as firebase from 'firebase';


const config = {
  apiKey: 'AIzaSyC5Wyk-m8ARn9c8kq_rcnEBc5fC5YbfVVo',
  authDomain: 'instaclone-c83e7.firebaseapp.com',
  databaseURL: 'https://instaclone-c83e7.firebaseio.com',
  projectId: 'instaclone-c83e7',
  storageBucket: 'instaclone-c83e7.appspot.com',
  messagingSenderId: '571878434444',
};


firebase.initializeApp(config);

export const auth = firebase.auth();
