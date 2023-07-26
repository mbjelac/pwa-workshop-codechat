importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "YOUR_DETAILS_HERE",
    authDomain: "YOUR_DETAILS_HERE",
    projectId: "YOUR_DETAILS_HERE",
    storageBucket: "YOUR_DETAILS_HERE",
    messagingSenderId: "YOUR_DETAILS_HERE",
    appId: "YOUR_DETAILS_HERE",
    measurementId: "YOUR_DETAILS_HERE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
});
