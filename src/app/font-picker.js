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

            /* END ********* */

            /*
            *  @TODO 5.3.6
            *      Apply selected local font on page load
            *
            * */

            /* END ********* */
        }
    }, []);

    const handleLocalFontsPermission = (permission) => {
        /*
        *  @TODO 5.3.2
        *       loadLocalFonts if permission is "granted"
        *
        * */

        /* END ********* */
    }

    const requestLocalFontsPermission = async () => {
        /*
        *  @TODO 5.3.1
        *       Request permission to local-fonts
        *
        * */

        /* END ********* */
    }

    const loadLocalFonts = async () => {
        try {
            /*
            *  @TODO 5.3.2
            *       Call window.queryLocalFonts()
            *
            * */
            const availableFonts = [];
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
            <></>
            /* END ********* */
        )
    }

    return (<></>)

}

