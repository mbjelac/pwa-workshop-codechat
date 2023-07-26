import {useEffect, useState} from "preact/hooks";

import {IconLight, IconDark, IconSystem} from "./_svg";

export default function ColorThemeToggle() {

    const [theme, setTheme] = useState('system');

    useEffect(() => {
        if (typeof window !== "undefined") {
            /*
            *  @TODO 5.1.1
            *  		Check if there is a saved theme in local storage, then call `setNewTheme()`
            * */

            /* END ********* */
        }
    }, []);

    const setNewTheme = (t) => {
        /*
        *  @TODO 5.1.1
        *  		Set the new theme to (1) state, (2)local storage, and (3) the <html data-theme> attribute
        * */

        /* END ********* */
    }

    const toggleTheme = () => {
        /*
        *  @TODO 5.1.1
        *  		In each case, call setNewTheme() passing in a different theme
        * */

        /* END ********* */
    };

    return (
        <button className="button button--icon" aria-label="Toggle Theme" onClick={() => toggleTheme()}>
            {theme === "system" && <IconSystem />}
            {theme === "dark" && <IconDark />}
            {theme === "light" && <IconLight />}
        </button>
    );
}

