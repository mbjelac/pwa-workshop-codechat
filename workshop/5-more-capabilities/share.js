import {useEffect, useState} from "preact/hooks";
import {IconShare} from "./_svg";

export default function Share() {

    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        /*
        *  @TODO 5.2.1
        *       Set the `canShare` variable to true is window.navigator.share
        * */
        if ((typeof window !== "undefined") && "share" in window.navigator) {
            setCanShare(true);
        }
        /* END ********* */
    }, []);

    const shareApp = () => {
        /*
        *  @TODO 5.2.2
        *       Share application
        * */
        window.navigator.share({
            title: "CodeChat",
            text: "Check out this app! It's an in-browser code editor and notifications messenger",
            url: "https://pwa-workshop-codechat.web.app"
        })
        /* END ********* */
    }

    /*
    *  @TODO 5.2.1
    *       Add button to shareFile if `canShare` is true
    *       (Use <IconShare />
    * */
    if (canShare) return (
        <button className="button button--icon" aria-label="Share App" onClick={() => shareApp()}>
            <IconShare />
        </button>
    )

    return (
        <button className="button button--icon" aria-label="Share App (disabled)" disabled>
            <IconShare />
        </button>
    );
    /* END ********* */
}



