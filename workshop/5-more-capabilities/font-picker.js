import {useEffect, useState} from "preact/hooks";

export default function FontPicker() {

    const [needsLocalFontsPermission, setNeedsLocalFontsPermission] = useState(true);
    const [localFonts, setLocalFonts] = useState([]);
    const [currentFont, setCurrentFont] = useState('monospace');

    useEffect(async () => {
        if (typeof window !== "undefined" && "queryLocalFonts" in window) {
            /*
            *  @TODO 5.3.3
            *      handleLocalFontsPermission on page load
            *
            * */
            const { state } = await navigator.permissions.query({ name: "local-fonts" });
            handleLocalFontsPermission(state);
            /* END ********* */

            /*
            *  @TODO 5.3.6
            *      Apply selected local font on page load
            *
            * */
            const savedCurrentFont = localStorage.getItem("current-font");
            if (savedCurrentFont) {
                const editor = document.querySelector(".editor--textarea");
                editor.style.fontFamily = savedCurrentFont;
                setCurrentFont(savedCurrentFont);
            }

            /* END ********* */
        }
    }, []);

    const handleLocalFontsPermission = (permission) => {
        /*
        *  @TODO 5.3.2
        *       loadLocalFonts if permission is "granted"
        *
        * */
        if (permission === "granted") {
            setNeedsLocalFontsPermission(false);
            loadLocalFonts();
        } else {
            setNeedsLocalFontsPermission(true);
        }
        /* END ********* */
    }

    const requestLocalFontsPermission = async () => {
        /*
        *  @TODO 5.3.1
        *       Request permission to local-fonts
        *
        * */
        const { state } = await navigator.permissions.request({ name: "local-fonts" });
        handleLocalFontsPermission(state);
        /* END ********* */
    }

    const loadLocalFonts = async () => {
        try {
            /*
            *  @TODO 5.3.2
            *       Call window.queryLocalFonts()
            *
            * */
            const availableFonts = await window.queryLocalFonts();
            /* END ********* */

            let fontFamilies = [];

            for (const fontData of availableFonts) {
                const family = fontData.family;
                if (!fontFamilies.includes(family)) {
                    fontFamilies.push(family);
                }
            }

            setLocalFonts(fontFamilies);
        } catch (err) {
            console.error(err.name, err.message);
        }
    }

    const selectFont = async (e) => {
        const f = e.target.value;

        /*
        *  @TODO 5.3.5
        *       Apply and save local font
        *
        * */
        const editor = document.querySelector(".editor--textarea");
        editor.style.fontFamily = f;

        setCurrentFont(f);
        localStorage.setItem("current-font", f);
        /* END ********* */
    }


    if ((typeof window !== "undefined") && "queryLocalFonts" in window) {

        if (needsLocalFontsPermission) return (
            <button className="button" onClick={() => requestLocalFontsPermission()}>
                Allow font access
            </button>
        )

        return (
            /*
            *  @TODO 5.3.4
            *       Add a <select> to choose a font
            *
            * */
            <select value={currentFont} onChange={selectFont}>
                <option value="monospace">Monospace (default)</option>
                {
                    localFonts.map((f) => {
                        return (
                            <option value={f}>{f}</option>
                        )
                    })
                }
            </select>
            /* END ********* */
        )
    }

    return (<></>)

}

