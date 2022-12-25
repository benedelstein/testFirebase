import * as functions from "firebase-functions";

export const testFunction = functions.https.onRequest((req,res) => {
    console.log('ok');
    res.send('ok');
})

export const testAsync = functions.https.onRequest(async (req,res) => {
    await new Promise(r => setTimeout(r, 10000)); // wait 10s
    res.send('ok');
})