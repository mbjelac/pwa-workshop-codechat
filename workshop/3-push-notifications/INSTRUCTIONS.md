# Step 3 - Push Notifications

In this step, we'll enable the application to send and receive push notifications.

## 3.1 Setup firebase messaging

During the [Setup](../0-setup/INSTRUCTIONS.md), you should already have created your Firebase project. 

1. In your Project Settings, click on "General"
2. Scroll down to "Your apps". You should see the web app you generated during setup.
<img width="1175" alt="Screenshot 2023-07-23 at 18 21 17" src="https://github.com/ireade/pwa-workshop-codechat/assets/8677283/9c2cc367-d201-4644-b1fc-99ae3e41f749">

3. Take note of the `firebaseConfig` object. You'll need it in the next step.

4. In your Project Settings, click on "Cloud Messaging"
<img width="851" alt="Screenshot 2023-07-23 at 15 15 44" src="https://github.com/ireade/pwa-workshop-codechat/assets/8677283/ad74addb-1948-4c34-a6f6-962e267336f8">

5. Under "Web Push certificates", click "Generate key pair". This will return a key, your `firebaseVapidKey`. You'll need it in the next step.


## 3.2 Initialise firebase application

1. Create a **firebase-messaging-sw.js** file and place in the **src/static** directory
    - Note that you'll need to create the **src/static** directory first. We're placing this file here so that when we build the application, it'll remain in the root
1. Copy the following to your **firebase-messaging-sw.js** file
   ```js
   importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
   importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
   
   firebase.initializeApp({});
   
   const messaging = firebase.messaging();
   
   messaging.onBackgroundMessage((payload) => {
       console.log(
           '[firebase-messaging-sw.js] Received background message ',
           payload
       );
   });
   ```
1. Add your `firebaseConfig` object to `firebase.initializeApp()`

_Work in **src/app/_firebase.js**_

1. Add your `firebaseConfig` object and `firebaseVapidKey`
1. Register the **firebase-messaging-sw.js** service worker file


## 3.3 Request notification permission

_Work in **src/app/messaging.js**_

1. Add a button to enable push notifications
    - This button should be displayed if `'Notification' in window` exists and you should have a fallback if not
    - When clicked, the button should trigger the `requestNotificationPermission()` function
1. In the `requestNotificationPermission()` function, trigger `Notification.requestPermission()`, returning the result to a variable
1. Pass that variable to the `handleNotificationPermission()` function

**🧪 TEST** - Test that this button works. When you click it, you should see a permission window pop up. For the moment, just dismiss this window (don't accept or reject). 

## 3.4 Handle notification permission

1. In the `handleNotificationPermission()`, call `getCurrentUserToken()` (this is a function from the **_firebase.js** file)
1. The `getCurrentUserToken()` function returns a variable, `currentToken`.
    1. Check if `currentToken` is defined. If it is, save it to local storage.
    2. If not, re-call `handleNotificationPermission()` but pass "default" as the argument.

**🧪 TEST** - Now you can test accepting the notification permission. If everything works correctly, there should be no errors thrown.

## 3.5 Handle notification permission on page load

1. In `useEffect()`, after **_firebase.js** is loaded, call the `handleNotificationPermission()` function passing in `Notification.permission`

**🧪 TEST** - Check to see that your permission is saved on each page refresh.

## 3.6 Deploy firebase function

We're using Firebase Functions for our server side of this application. The server-side code has already been written, you can check it out in **functions/index.js**.

Deploy your function by running:

```bash
firebase deploy --only functions
```

Once the deploy is successful, you should receive a URL for your function.

🔔 Note - If you didn't enable Firebase Functions or you're having trouble deploying, you can find a [backup firebase function URL here](backup_firebase_function.md).


## 3.7 Connect firebase function

_Work in **src/app/send-notification-form.js**_

1. Add your `appUrl`

**🧪 TEST** - Now you can fully test sending and receiving notification via the form. The ideal way to test is to have two browsers open (Chrome and Microsoft Edge preferably). Get the token from one browser, and add it to the "Destination token" field in the other browser. Then test sending a notification.

Common issues: 
- Make sure you have "Do Not Disturb" disabled
- Make sure the browsers have notifications enabled

## 🗺️ Navigation

0. [Setup](../0-setup/INSTRUCTIONS.md)
1. [Making the PWA installable](../1-installable/INSTRUCTIONS.md)
1. [Adding core capabilities — File System Access and File Handling](../2-file-access/INSTRUCTIONS.md)
1. Adding core capabilities — Push Notifications 🎯
1. [Improving reliability — Service Worker and Storage APIs](../4-reliable/INSTRUCTIONS.md)
1. [More capabilities — Colour Theme, Web Share, Local Font Access](../5-more-capabilities/INSTRUCTIONS.md)
