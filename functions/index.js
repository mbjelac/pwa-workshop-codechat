const {onRequest} = require("firebase-functions/v2/https"); // https://firebase.google.com/docs/functions/http-events?gen=2nd

const admin = require('firebase-admin'); // https://firebase.google.com/docs/admin/setup
const {getMessaging} = require('firebase-admin/messaging'); // https://firebase.google.com/docs/reference/admin/node/firebase-admin.messaging

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

exports.sendNotification = onRequest(
    { cors: true },
    async (req, res) => {

        const destinationToken = decodeURIComponent(req.query.destination);
        const fromToken = decodeURIComponent(req.query.from);
        const notificationTitle = 'New CodeChat Message!';
        const notificationBody = decodeURIComponent(req.query.message);

        const payload = {
            data: {
                fromToken,
            },
            notification: {
                title: notificationTitle,
                body: notificationBody
            },
            token: destinationToken
        };

        getMessaging().send(payload)
            .then((response) => {
                res.status(200).send({
                    success: true,
                    response: response,
                    payload,
                });
            })
            .catch((error) => {
                res.status(400).send({
                    success: false,
                    error: error,
                    payload,
                });
            });
    }
);
