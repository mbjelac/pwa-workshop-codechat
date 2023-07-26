import {useEffect, useState} from "preact/hooks";
import {IconInstall} from "./_svg";

export default function Install() {

    const [showInstallButton, setShowInstallButton] = useState(false);
    const [installPrompt, setInstallPrompt] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {

            window.addEventListener('beforeinstallprompt', (event) => {
                event.preventDefault();
                /*
                *  @TODO 1.3
                *      Save event to "installPrompt"
                * */

                /* END ********* */
            });

            window.addEventListener('appinstalled', (event) => {
                /*
                *  @TODO 1.3
                *      Set "installPrompt" and "showInstallButton" to null
                * */

                /* END ********* */
            });

        }
    }, []);

    const install = async () => {
        /*
        *  @TODO 1.3
        *       - Trigger prompt() method on installPrompt
        *       - Get outcome
        *       - If outcome is accepted, hide install button
        * */

        /* END ********* */

        setInstallPrompt(null);
    };

    if (showInstallButton) return (
        <button className="button button--icon" aria-label="Install" onclick={() => install()}>
            <IconInstall />
        </button>
    );

    return (<></>);
}
