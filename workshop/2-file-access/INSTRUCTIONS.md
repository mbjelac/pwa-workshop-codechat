# Step 2 - File System Access and File Handling

In this step, we'll be building the core capabilities of the code editor. 

## 2.1 Get and display file contents

_Work in **src/app/code-editor.js**_

1. Add a button to open a file (via `openFile()` function), and a fallback for browsers that don't support this functionality
    ```js
    if ((typeof window !== "undefined") && 'showOpenFilePicker' in window) {}
    ```
1. In the `openFile()` function:
    1. Copy the following code:
        ```js
        let f;
        [f] = await window.showOpenFilePicker({
            multiple: false,
            excludeAcceptAllOption: true,
            types: []
        });
        ```
    1. Inside the `types` array, add the following object
        ```
       {
           description: "Frontend development files",
           accept: {
               "text/*": [".html", ".css", ".js"]
           }
       }
       ```
       Feel free to edit to allow your file editor to open your choice of file types!
    1. Call `handleFile(f)`
1. Within the `handleFile()` function:
    1. Copy the following code:
        ```js
        const file = await f.getFile();
        const contents = await file.text();
        ```
    1. Use the `setFileName()`, `setFileContents()` and `setFileHandle()` so save `file.name`, `contents`, and `f` respectively

**🧪 TEST** - Now, you can test this by trying to open a file. Note that you may want to wrap your code in a try/catch block to handle potential errors. 

## 2.2 Save file back to disc

1. Within the `saveFile()` function:
    1. Copy the following code:
        ```js
        const writable = await fileHandle.createWritable();
        await writable.write(fileContents);
        await writable.close();
        ```
    1. Call `closeFile()`
1. Within the `closeFile()` function:
    1. Use the `setFileName()`, `setFileContents()` and `setFileHandle()` variables to set the variables to `null`

**🧪 TEST** - Now you can try saving a file. Re-open that same file to see if your changes were saved.

## 2.3 Allow file handling

_Work in **src/manifest.json**_

1. Add `file_handlers` to your manifest.json
    - This accepts an array of objects, e.g. - 
        ```json
           [{
             "action": "/",
             "accept": {
               "text/html": [".html"]
             }
           }]
        ```
    - Add an object for each type of file we want to accept 
    - See [Common MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)


## 2.4 Manage file handling

_Work in **src/app/code-editor.js**_

1. Inside the `useEffect()` function, copy the following code:
    ```js
    if (typeof window !== "undefined" && 
       "launchQueue" in window && 
       "LaunchParams" in window && 
       "files" in LaunchParams.prototype) {
        launchQueue.setConsumer((launchParams) => {
            if (!launchParams.files.length) return;
    
            for (const f of launchParams.files) {
                console.log(f);
            }
        });
    }
    ```
1. Within the loop of `launchParams.files`, call the `handleFile()` function, passing in `f`

**🧪 TEST** - To test this, you'll need to make sure the application is installed on your device and the browser you installed it with does support file handling. Then, you can go to a file, right click to open the file with a specific application, and you should see the PWA listed. 

If you don't see your application listed, you may be using a slightly older browser version. In the list of potential applications, select "Other", then "Enable All Applications" and search for your installed PWA.

<img width="450" alt="Screenshot 2023-07-23 at 18 14 02" src="https://github.com/ireade/pwa-workshop-codechat/assets/8677283/49f9c0bb-2ee8-4bfc-9cd7-d1d5a5686036">
<img width="562" alt="Screenshot 2023-07-23 at 18 14 15" src="https://github.com/ireade/pwa-workshop-codechat/assets/8677283/de2fed3c-2b9f-4d15-83ee-2cbfcf74ddaf">

If you still don't see your application, double check that you're using the latest version of Chrome or Microsoft Edge. 

## 🗺️ Navigation

0. [Setup](../0-setup/INSTRUCTIONS.md)
1. [Making the PWA installable](../1-installable/INSTRUCTIONS.md)
1. Adding core capabilities — File System Access and File Handling 🎯
1. [Adding core capabilities — Push Notifications](../3-push-notifications/INSTRUCTIONS.md)
1. [Improving reliability — Service Worker and Storage APIs](../4-reliable/INSTRUCTIONS.md)
1. [More capabilities — Colour Theme, Web Share, Local Font Access](../5-more-capabilities/INSTRUCTIONS.md)
