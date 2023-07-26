import {useEffect, useState} from "preact/hooks";

export default function SendNotificationForm() {

    const [destination, setDestination] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");

    const [currentUserToken, setCurrentUserToken] = useState("");

    useEffect(() => {
        setCurrentUserToken(localStorage.getItem("currentUserToken"));

        const lastDestination = localStorage.getItem("lastDestination");
        if (lastDestination) setDestination(lastDestination);

    }, []);

    const handleInputDestination = async (e) => {
        const { value } = e.target;
        setDestination(value);
    }

    const handleInputMessage = async (e) => {
        const { value } = e.target;
        setMessage(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const d = encodeURIComponent(destination);
        const m = encodeURIComponent(message);
        const f = encodeURIComponent(currentUserToken);

        /*
        *  @TODO 3.7
        *      Add your appUrl
        * */
        const appUrl = "https://sendnotification-j45qrjv6mq-uc.a.run.app";
        /* END ********* */

        const url = `${appUrl}?destination=${d}&from=${f}&message=${m}`;

        setResult("Sending...");

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);

                if (res.success) {
                    setResult("Notification sent!");
                } else {
                    setResult("Unable to send notification");
                }

                setMessage("");
                localStorage.setItem("lastDestination", destination);

                setTimeout(() => {
                    setResult("");
                }, 3000);

            })
            .catch((err) => {
                setResult("Unable to send notification");
                console.log(err);
            });
    }


    return (
        <form onsubmit={handleSubmit} className="form">
            <label for="fromToken">From</label>
            <input id="fromToken" type="text" value={currentUserToken} disabled />

            <label for="destination">Destination token</label>
            <input id="destination" type="text" value={destination} onInput={handleInputDestination} />

            <label for="message">Message</label>
            <input id="message" type="text" value={message} onInput={handleInputMessage} />

            <button type="submit" className="button">Submit</button>

            <br/><br/>
            {result && <p>{result}</p>}
        </form>
    )

}
