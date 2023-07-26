import {useEffect, useState} from "preact/hooks";
import {IconSave, IconClose} from "./_svg";
import FontPicker from "./font-picker";

export default function CodeEditor() {

    const [fileHandle, setFileHandle] = useState();

    const [fileName, setFileName] = useState("");
    const [fileContents, setFileContents] = useState("");

    useEffect(() => {
        /*
        *  @TODO 2.4
        *      Handle incoming files
        *
        * */
        if (typeof window !== "undefined" &&
            "launchQueue" in window &&
            "LaunchParams" in window &&
            "files" in LaunchParams.prototype) {
            launchQueue.setConsumer((launchParams) => {
                if (!launchParams.files.length) return;

                for (const f of launchParams.files) {
                    console.log(f);
                    handleFile(f);
                }
            });
        }
        /* END ********* */

    }, []);

    const handleInput = (e) => {
        const { value } = e.target;
        setFileContents(value);
    };

    const openFile = async () => {
        /*
        *  @TODO 2.1
        *     Show file picker to select text files
        * */
        try {
            let f;
            [f] = await window.showOpenFilePicker({
                multiple: false,
                excludeAcceptAllOption: true,
                types: [
                    {
                        description: "Frontend development files",
                        accept: {
                            "text/*": [".html", ".css", ".js"]
                        }
                    }
                ]
            });

            await handleFile(f);
        } catch (error) {
            console.log(error);
        }
        /* END ********* */
    }

    const handleFile = async (f) => {
        /*
        *  @TODO 2.1
        *       - Get contents from file
        *       - Display contents in textarea
        * */
        try {
            const file = await f.getFile();
            const contents = await file.text();

            setFileName(file.name);
            setFileContents(contents);
            setFileHandle(f);
        } catch (error) {
            console.log(error);
        }
        /* END ********* */
    }

    const saveFile = async () => {
        /*
        *  @TODO 2.2
        *      Save file back to disc
        * */
        try {
            const writable = await fileHandle.createWritable();
            await writable.write(fileContents);
            await writable.close();

            closeFile();
        } catch (error) {
            console.log(error);
        }
        /* END ********* */
    }

    const closeFile = async () => {
        /*
        *  @TODO 2.2
        *      Clear file variables
        * */
        setFileName(null);
        setFileContents(null);
        setFileHandle(null);
        /* END ********* */
    }

    if (!fileContents) return (
        <div className="full-height-container">
            <div>
                <img src="/assets/logo.svg" alt="CodeChat Logo" />
                <h2 className="h2">Your in-browser code editor</h2>
                {
                    /*
                    *  @TODO 2.1
                    *      Add button to open file (with fallback for browsers that don't support)
                    * */
                    ((typeof window !== "undefined") && 'showOpenFilePicker' in window) ?
                        <button className="button" onClick={() => openFile()}>
                            Open file
                        </button>
                        :
                        <p>Unfortunately, your browser doesn't support file system access so this application won't work :(</p>
                    /* END ********* */
                }
            </div>
        </div>
    )

    return (
        <section className="editor">
            <header className="editor--header">
                <h3 className="editor--file-title">{fileName}</h3>
                <div className="editor--actions">
                    <FontPicker />
                    <button className="button button--icon" aria-label="Save File" onClick={() => saveFile()}>
                        <IconSave />
                    </button>
                    <button className="button button--icon" aria-label="Close File" onClick={() => closeFile()}>
                        <IconClose />
                    </button>
                </div>
            </header>

            <textarea className="editor--textarea"
                      name="" cols="30" rows="10"
                      value={fileContents} onInput={handleInput}></textarea>
        </section>
    );
}
