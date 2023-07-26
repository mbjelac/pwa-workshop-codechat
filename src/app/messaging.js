import {useEffect, useState} from "preact/hooks";
import SendNotificationForm from "./send-notification-form";
let getCurrentUserToken;

export default function Messaging() {

    const [needsNotificationPermission, setNeedsNotificationPermission] = useState(true);
    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("./_firebase").then((fb) => {
                getCurrentUserToken = fb.default;

                /*
                *  @TODO 3.5
                *    Call handleNotificationPermission, passing Notification.permission
                *
                * */

                /* END ********* */
            });

            /*
            *  @TODO 4.2
            *    Listen on offline and online events and call setIsOffline()
            *
            * */

            /* END ********* */
        }
    }, []);


    const handleNotificationPermission = (permission) => {
        if (permission === "granted") {
            setNeedsNotificationPermission(false);

            /*
            *  @TODO 3.4
            *    - Call `getCurrentUserToken`
            *    - Get `currentToken`, and save to localStorage
            *
            * */

            /* END ********* */
        } else {
            setNeedsNotificationPermission(true);
            localStorage.removeItem("currentUserToken");
        }
    };

    const requestNotificationPermission = async () => {
        /*
        *  @TODO 3.3
        *     Request notification permission and handle result
        * */

        /* END ********* */
    }

    if (needsNotificationPermission) return (
        <div className="full-height-container">
            <div>
                <p>Send messages via push notifications</p><br/>
                {
                    /*
                    *  @TODO 3.3
                    *      Add button to request notification permission (and fallback)
                    * */

                    /* END ********* */
                }
            </div>
        </div>
    )

    return (
        <div className="full-height-container">
            <div>
                <h2 className="h2">Send notification</h2>

                {
                    /*
                    *  @TODO 4.2
                    *    Show <SendNotificationForm /> if online and add fallback if not
                    *
                    * */
                    <SendNotificationForm />
                    /* END ********* */
                }
            </div>
        </div>
    );
}
