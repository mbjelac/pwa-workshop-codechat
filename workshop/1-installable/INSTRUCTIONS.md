# Step 1 - Making the PWA installable
In this step, we'll be making the PWA installable onto devices as a standalone application.

## 1.1 Create a basic manifest.json

1. Create a **manifest.json** file and add to **src** directory
   1. Include the following fields:
       - `name`
       - `start_url` - `/`
       - `display` - `standalone`
       - `icons`
           - This accepts an array of objects, for example:
             ```json
             {
              "src": "/assets/pwa-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
             }
             ```
      	   - Use the 192 and 512 icons in **src/assets** directory

1. Create an empty **sw.js** file and add to **src** directory
1. Register this service worker in **src/index.js**
    - Register a service worker by calling `navigator.serviceWorker.register("SERVICE_WORKER_URL")`
    - Make sure to wrap the registration code in an `if` statement checking for `(typeof window !== "undefined" && "serviceWorker" in navigator)`

## 1.2 Add additional fields to manifest.json

- `description`
- `orientation`
- `background_color` - `#181818`
- `theme_color` - `#D33257`
- `lang`
- `dir`
- `screenshots`
	- This also accepts an array of objects like the `icons` field
 	- Use the screenshots in the **src/assets** directory
- `categories`
	- This accepts an array of categories
   	- See https://www.w3.org/TR/manifest-app-info/#categories-member

## 1.3 Custom install button

*Work in **src/app/install.js***

1. Within the `beforeinstallprompt` event: 
    1. Set the `installPrompt` variable to the `event`
    1. Call the `setShowInstallButton()` function, passing in `true`
1. Within the `install()` function
    1. Copy and paste the following code:
        ```js
        installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;
        ```
    1. If the `outcome` is `"accepted"`, hide the install button
1. Within the `appinstalled` event:
    1. Set the `installPrompt` variable to `null`
    1. Hide the install button

**🧪 TEST** - Try using the custom install button to install the app on your device.

## 1.4 Deploy application

Now, you can build and deploy your application to Firebase hosting and test installing the app via different browsers/devices.

### Build

```bash
npm run build
```

Preact does server-side rendering, which means that your application is being built outside a normal browser. If you get any errors such as `ReferenceError: navigator is not defined` or `ReferenceError: window is not defined`, you'll need to wrap that bit of code in an `if` statement to check if that is available first. E.g. 

```js
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
	navigator.serviceWorker.register('sw.js');
}
```

### Deploy

```bash
firebase deploy --only hosting
```

## 🗺️ Navigation

0. [Setup](../0-setup/INSTRUCTIONS.md)
1. Making the PWA installable 🎯
1. [Adding core capabilities — File System Access and File Handling](../2-file-access/INSTRUCTIONS.md)
1. [Adding core capabilities — Push Notifications](../3-push-notifications/INSTRUCTIONS.md)
1. [Improving reliability — Service Worker and Storage APIs](../4-reliable/INSTRUCTIONS.md)
1. [More capabilities — Colour Theme, Web Share, Local Font Access](../5-more-capabilities/INSTRUCTIONS.md)
