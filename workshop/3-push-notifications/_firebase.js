import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

/*
*  @TODO 3.2
*     Add firebaseConfig and firebaseVapidKey
*
* */
const firebaseConfig = {
    apiKey: "YOUR_DETAILS_HERE",
    authDomain: "YOUR_DETAILS_HERE",
    projectId: "YOUR_DETAILS_HERE",
    storageBucket: "YOUR_DETAILS_HERE",
    messagingSenderId: "YOUR_DETAILS_HERE",
    appId: "YOUR_DETAILS_HERE",
    measurementId: "YOUR_DETAILS_HERE"
};

const firebaseVapidKey = "YOUR_DETAILS_HERE";
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
