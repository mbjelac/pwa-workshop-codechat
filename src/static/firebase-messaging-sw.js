importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCZuaRRVJRrJj_0ok6VZxgM4F5Uf9XHmFQ",
    authDomain: "wearedevs2023-pwa.firebaseapp.com",
    projectId: "wearedevs2023-pwa",
    storageBucket: "wearedevs2023-pwa.appspot.com",
    messagingSenderId: "835947234585",
    appId: "1:835947234585:web:4d6822595a64bf2b92b188",
    measurementId: "G-6K2KHZ4RB0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
});
