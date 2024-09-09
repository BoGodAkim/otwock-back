import * as firebase from 'firebase-admin';

export const notificationsProviders = [
  {
    provide: 'FIREBASE',
    useFactory: () => {
      const firebaseCredentials = '';
      return firebase.initializeApp({
        credential: firebase.credential.cert(firebaseCredentials),
      });
    },
  },
];
