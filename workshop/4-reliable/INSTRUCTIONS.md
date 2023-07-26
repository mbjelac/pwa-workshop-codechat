# Step 4 - Service Worker and Storage APIs

In this step, we'll make the PWA offline-capable using Service Worker. We'll be using the Workbox library, via Preact.

## 4.1 Offline fallback with Preact and Workbox

_Work in **src/sw.js**_

1. Copy the following into your service worker
    ```js
    import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw';
    ```
    Although we're using the Workbox library, Preact helps us abstract some of the code even further
1. Call the `setupRouting()` function
    - This will set up Workbox's network-first fallback behaviour. Read more about [network-first](https://developer.chrome.com/docs/workbox/modules/workbox-strategies/#network-first-network-falling-back-to-cache)
1. To get the list of URLs generated during buildtime, call `getFiles()`, returning the result of that to a variable, e.g. `urlsToCache`
1. Finally, call `setupPrecaching()` passing in the `urlsToCache` as the only parameter

🚨 Preact doesn't usually build the service worker file while we're running the dev server, so you may see an error in your console about how import statements are not supported. Don't worry about this! To test that your offline fallback page works properly, you should build your application then run the server. It may also help to deploy your application and test this on the deployed version, rather than localhost. 

```bash
npm run build
npm run serve
```

## 4.2 Handle offline state

_Work in **src/app/messaging.js**_

1. In the `useEffect()` function, listen on the "offline" and "online" events on the `window`
   1. If `window` is offline, call `setIsOffline(true)`
   1. If `window` is online, call `setIsOffline(false)`
1. In the template, only show the `<SendNotificationForm />` element if the browser is online. Add a fallback/message for when the browser is offline

**🧪 TEST** - Test your app by simulating both online and offline via your DevTools. 


## 🗺️ Navigation

0. [Setup](../0-setup/INSTRUCTIONS.md)
1. [Making the PWA installable](../1-installable/INSTRUCTIONS.md)
1. [Adding core capabilities — File System Access and File Handling](../2-file-access/INSTRUCTIONS.md)
1. [Adding core capabilities — Push Notifications](../3-push-notifications/INSTRUCTIONS.md)
1. Improving reliability — Service Worker and Storage APIs 🎯
1. [More capabilities — Colour Theme, Web Share, Local Font Access](../5-more-capabilities/INSTRUCTIONS.md)
