# Step 5 - Adding More Capabilities

Depending on how much extra time you have, you may want to add one or all of these extra capabilities to your PWA.

## 5.1 Colour Theme

Here, we'll add capabilities to a button to toggle between three colour theme settings - 
1. Dark
1. Light
1. System - where we use whichever theme the device default is

### 5.1.1 Toggle theme

_Work in **src/app/color-theme-toggle.js**_

1. In the `toggleTheme()` function:
    1. Switch the theme to either "dark", "light", or "system" depending on the current `theme`. You can use something like a `switch` or just basic `if`/`else` statements.
1. In the `setNewTheme()` function:
    1. Call `setTheme()`, passing in the new theme (`t`)
    1. Set the `data-theme` attribute on the `<html>` element to the new theme
    1. Save the new theme to local storage
1. In the `useEffect()` function:
    1. Check if there is a saved theme in local storage
    2. If there is, call `setNewTheme()`, passing in the saved theme

### 5.1.2 Add styles

_Work in **src/assets/main.css**_

1. The default colour scheme is the dark theme. So, add the light theme variables shown below for the following conditions:
    1. If the `data-theme` attribute on the `html` element is `light`
    1. If the browser `(prefers-color-scheme: light)` and the `data-theme` attribute on the `html` element is `system` 

```
--color-bg: rgb(200, 200, 200);
--color-bg-lighter: rgb(220, 220, 220);
--color-border: rgb(180, 180, 180);
--color-text: rgb(24, 24, 24);
```

**🧪 TEST** - Test your toggle to see if the colour theme changes!


## 5.2 Web Share

Here, we'll add a capability to share the application info with another app on the same device. 

### 5.2.1 Add a share button

_Work in **src/app/share.js**_

1. In the `useEffect()` function, set the `canShare` variable to `true` if the browser supports `window.navigator.share`
1. In the template, add a button to share the app (with a fallback for browsers that don't support)

### 5.2.2 Share

1. In the `shareApp()` function:
    1. Call `window.navigator.share()`
        - This accepts an object with the following options:
            - `title`
            - `text`
            - `url`

**🧪 TEST** - Now you can test this! Make sure you use a browser that supports the [Web Share API](https://caniuse.com/web-share), e.g. Microsoft Edge.


## 5.3 Local Font Access

Here, we'll add the capability for the user to change the font of the code editor.

### 5.3.1 Request local font access

🚨 To request local font access, we'll need to use an experimental API - `navigator.permissions.request()`
You'll need to make sure you've enabled the flag for your browser. See https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API

_Work in **src/app/font-picker.js**_

1. In the `requestLocalFontsPermission()` function, call `navigator.permissions.request()`
    - This accepts an object, with the key `name`, which is the name of the permission we're trying to request.
    - In this case, the permission we're requesting is `"local-fonts"`
1. Returned from that function is a `result`. Call `handleLocalFontsPermission(result.state)`

### 5.3.2 Handle permission and load fonts

1. Like with managing permission for notifications, the `handleLocalFontsPermission()` function accepts one parameter - `permission`. 
    1. If `permisssion` is `granted`, set the `needsLocalFontsPermission` variable to `false` and call `loadLocalFonts()`
    1. If not, set the `needsLocalFontsPermission` variable to `true`
1. In the `loadLocalFonts()` function, call `window.queryLocalFonts()` and return the result to a variable called `availableFonts`

### 5.3.3 Handle permission on page load 

1. We can query the state of a permission using `navigator.permissions.query()`. This works in the same was as `navigator.permissions.request()` and accepts the same object
1. Returned from that function is a `result`. Call `handleLocalFontsPermission(result.state)`


### 5.3.4 Add a `<select>` to choose a font

1. In the template, copy the following code:
    ```js
    <select value={currentFont}>
        <option value="monospace">Monospace (default)</option>
        {
            localFonts.map((f) => {
                return (
                    <option value={f}>{f}</option>
                )
            })
        }
    </select>
    ```
1. Add a `onChange` attribute to the `<select>` element, which directly calls `selectFont`

### 5.3.5 Apply local font

1. When a user selects a font, the `selectFont()` function is called. With the `f` variable representing the name of the new font family, do the following:
    1. Set the `fontFamily` on the `.editor--textarea` element to `f`
    1. Set the `currentFont` variable to `f`
    1. Save `f` to local storage as "current-font"

### 5.3.6 Apply selected local font on page load

1. Get the "current-font" from local storage
1. If there is a saved "current-font":
    1. Set the `fontFamily` on the `.editor--textarea` element to the "current-font"
    1. Set the `currentFont` variable to the "current-font"

**🧪 TEST** - Try enabling local font access and changing the editor font. Make sure you're using a browser that supports all the relevant features.

## 🗺️ Navigation

0. [Setup](../0-setup/INSTRUCTIONS.md)
1. [Making the PWA installable](../1-installable/INSTRUCTIONS.md)
1. [Adding core capabilities — File System Access and File Handling](../2-file-access/INSTRUCTIONS.md)
1. [Adding core capabilities — Push Notifications](../3-push-notifications/INSTRUCTIONS.md)
1. [Improving reliability — Service Worker and Storage APIs](../4-reliable/INSTRUCTIONS.md)
1. More capabilities — Colour Theme, Web Share, Local Font Access 🎯
1. [Extra credit](../6-extra/INSTRUCTIONS.md)
