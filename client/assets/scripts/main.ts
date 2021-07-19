// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cmd } from "./proto/cmdClient";
import { network } from "./network";
import { cs_msg } from "./proto/cs_msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.String)
    private host: string = "127.0.0.1";
    @property(cc.Integer)
    private port: number = 4001;


    start() {
        network.onOpen(this.svr_onOpen, this);
        network.onClose(this.svr_onClose, this);
        this.connectSvr();
    }

    update() {
        network.readMsg();
    }



    private connectSvr() {
        console.log("try to connect server");
        network.connect(this.host, this.port);
    }

    private svr_onOpen() {
        console.log("socket open");
        network.addHandler(cmd.connector_main_ping, this.svr_pingBack, this);
        network.addHandler(cmd.onHello, this.svr_onHello, this);
    }

    private svr_onClose() {
        console.log("socket close");
        this.scheduleOnce(() => {
            this.connectSvr();
        }, 2)
    }



    private btn_click() {
        let msg = cs_msg.c2s_connector_main_ping.encode({ "age": 30, "name": "ahuang" }).finish();
        network.sendMsg(cmd.connector_main_ping, msg);
    }

    private svr_pingBack(msgBuf: Uint8Array) {
        let msg = cs_msg.s2c_connector_main_ping.decode(msgBuf);
        console.log("ping_back", msg.toJSON());
    }

    private svr_onHello(msgBuf: Uint8Array) {
        let msg = cs_msg.s2c_onHello.decode(msgBuf);
        console.log("onHello", msg.toJSON());
    }


}
