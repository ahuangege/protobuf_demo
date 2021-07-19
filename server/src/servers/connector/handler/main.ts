import { Application, Session } from "mydog";
import { cmd } from "../../../config/cmd";
import { cs_msg } from "../../../proto/cs_msg";

export default class Handler {
    app: Application;
    uid: number = 1;
    constructor(app: Application) {
        this.app = app;
    }

    ping(msg: cs_msg.Ic2s_connector_main_ping, session: Session, next: Function) {
        if (!session.uid) {
            session.bind(this.uid++);
        }
        next({ "code": 0, "msg": "服务器已知晓" });
        this.app.sendMsgByUid(cmd.onHello, { "msg": "来自服务器的问候" }, [session.uid]);
    }
}