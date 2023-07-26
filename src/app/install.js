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
                setInstallPrompt(event);
                setShowInstallButton(true);
                /* END ********* */
            });

            window.addEventListener('appinstalled', (event) => {
                /*
                *  @TODO 1.3
                *      Set "installPrompt" and "showInstallButton" to null
                * */
                setInstallPrompt(null);
                setShowInstallButton(false);
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
        installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;

        if (outcome === "accepted") {
            setShowInstallButton(false)
        }
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
