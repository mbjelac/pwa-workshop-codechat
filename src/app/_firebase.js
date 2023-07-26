import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

/*
*  @TODO 3.2
*     Add firebaseConfig and firebaseVapidKey
*
* */
const firebaseConfig = {};

const firebaseVapidKey = null;
/* END ********* */

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

/*
*  @TODO 3.2
*     Create and register firebase-messaging-sw.js
*
* */

/* END ********* */

export default function getCurrentUserToken() {
    return getToken(messaging, {
        vapidKey: firebaseVapidKey,
    });
}
