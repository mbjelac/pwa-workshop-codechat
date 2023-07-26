import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

/*
*  @TODO 3.2
*     Add firebaseConfig and firebaseVapidKey
*
* */
const firebaseConfig = {
    apiKey: "AIzaSyCZuaRRVJRrJj_0ok6VZxgM4F5Uf9XHmFQ",
    authDomain: "wearedevs2023-pwa.firebaseapp.com",
    projectId: "wearedevs2023-pwa",
    storageBucket: "wearedevs2023-pwa.appspot.com",
    messagingSenderId: "835947234585",
    appId: "1:835947234585:web:4d6822595a64bf2b92b188",
    measurementId: "G-6K2KHZ4RB0"
};

const firebaseVapidKey = "BC6A5zxASIOwvfsy00mCDGy5_BueyfSPpks--OHfWJFLu-3P_Yk_fJSZXJEYundi1rhcqYVndP_WNN4oyQT513c";
/* END ********* */

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

/*
*  @TODO 3.2
*     Create and register firebase-messaging-sw.js
*
* */
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("firebase-messaging-sw.js")
        .then((reg) => {
            console.log("Registered firebase-messaging-sw.js")
        })
        .catch((err) => {
            console.log("Unable to register firebase-messaging-sw.js")
        })
}
/* END ********* */

export default function getCurrentUserToken() {
    return getToken(messaging, {
        vapidKey: firebaseVapidKey,
    });
}
