# Setup

Before you get started with this workshop, there's a few things you'll need to get setup.

## Browsers & environment

- [ ] Latest Chrome browser
- [ ] Latest Microsoft Edge (you'll need two browsers to test properly)
- [ ] Latest Node (v20+) - Run `npm n latest` to update your node

I recommend you specifically use Chrome + Edge because the two together cover all the APIs we'll be using in this workshop. If you'd rather use another browser, make sure you reference [caniuse.com](https://caniuse.com) for feature support.


## Clone repository

[Clone this repository](https://github.com/ireade/pwa-workshop-codechat) to your machine

1. Run `npm install` to install dependencies
1. Run `npm run dev` to start the application


## Firebase

This workshop makes use of Firebase for both Hosting and Cloud Functions. 

### Setup project
1. Create a [Firebase account](https://firebase.google.com) - it's completely free to sign up
1. Create a new project via the [Firebase Console](https://console.firebase.google.com/)
1. Add Firebase to your Web App
    ![Group 2](https://github.com/ireade/pwa-workshop-codechat/assets/8677283/9958c179-cc2d-46de-a260-059d2327dbd8)
    <img width="1427" alt="Screenshot 2023-07-23 at 14 27 41" src="https://github.com/ireade/pwa-workshop-codechat/assets/8677283/e3b66009-f748-4ba5-9abf-2086fe4ce924">
    As part of this process, you'll receive firebase configuration details. You don't need to do anything with this yet.

### Enable functions **
1. In your Console sidebar, go to Build > Functions 
1. Click "upgrade project" to enable Firebase Functions
    - This will require you to add a payment card and update to the Blaze Plan, but don't worry, it's usage-based and for the purposes of this workshop you shouldn't be charged up to $1 .

** This is a recommended but optional step. If you can't or don't want to put a card on file, I have provided a [backup firebase function URL](../3-push-notifications/backup_firebase_function.md) that will be available during the hours of this workshop.

### CLI
1. Install [Firebase CLI](https://firebase.google.com/docs/cli) package (`npm install -g firebase-tools`)
1. Sign in via the command line (`firebase login`)
1. Within the directory, run `firebase init`
    1. Select "Functions" and "Hosting" options
       <img width="1115" alt="Screenshot 2023-07-23 at 14 53 51" src="https://github.com/ireade/pwa-workshop-codechat/assets/8677283/48718a53-bec1-4345-8f7a-e2b542296a0c">

    1. Select "Use an existing project" and choose your newly created project
        <img width="624" alt="Screenshot 2023-07-23 at 14 54 51" src="https://github.com/ireade/pwa-workshop-codechat/assets/8677283/011b37af-e2f6-4724-9fcd-bbdbb451c613">
        <img width="643" alt="Screenshot 2023-07-23 at 14 55 20" src="https://github.com/ireade/pwa-workshop-codechat/assets/8677283/6b47d381-100a-4c17-8bd7-21bfda440269">


## How this works

Within each folder in this "workshop" directory, you'll find - 

1. An INSTRUCTIONS.md file with the instructions for this step of the workshop
1. Finished versions of the relevant files you'll be working with. If you're stuck, feel free to copy over that file to your project. 

Note that this repo will only be publicly available during the hours of this workshop.

## 🗺️ Navigation

0. Setup 🎯
1. [Making the PWA installable](../1-installable/INSTRUCTIONS.md)
1. [Adding core capabilities — File System Access and File Handling](../2-file-access/INSTRUCTIONS.md)
1. [Adding core capabilities — Push Notifications](../3-push-notifications/INSTRUCTIONS.md)
1. [Improving reliability — Service Worker and Storage APIs](../4-reliable/INSTRUCTIONS.md)
1. [More capabilities — Colour Theme, Web Share, Local Font Access](../5-more-capabilities/INSTRUCTIONS.md)
