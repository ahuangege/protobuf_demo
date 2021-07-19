
import { connector, createApp, Session } from "mydog";
import { getEncodeDecodeFunc } from "./app/encode_decode";
let app = createApp();

app.setConfig("connector", { "connector": connector.Ws, "clientOnCb": clientOnCb, "clientOffCb": clientOffCb });
app.setConfig("encodeDecode", getEncodeDecodeFunc());
app.start();

process.on("uncaughtException", function (err: any) {
    console.log(err)
});


function clientOnCb(session: Session) {
    console.log("one client on");
}

function clientOffCb(session: Session) {
    console.log("one client off", session.uid);
}