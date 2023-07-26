import {useEffect, useState} from "preact/hooks";
import {IconShare} from "./_svg";

export default function Share() {

    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        /*
        *  @TODO 5.2.1
        *       Set the `canShare` variable to true is window.navigator.share
        * */

        /* END ********* */
    }, []);

    const shareApp = () => {
        /*
        *  @TODO 5.2.2
        *       Share application
        * */

        /* END ********* */
    }

    /*
    *  @TODO 5.2.1
    *       Add button to shareFile if `canShare` is true
    *       (Use <IconShare />
    * */
    return (
        <button className="button button--icon" aria-label="Share App" disabled>
            <IconShare />
        </button>
    );
    /* END ********* */
}



