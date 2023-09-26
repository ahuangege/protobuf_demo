import { app, I_encodeDecodeConfig } from "mydog";
import { cmd } from "../config/cmd";
import { cs_msg } from "../proto/cs_msg";

interface I_msg_con {
    c2s?: { decode: (msg: Buffer) => any };
    s2c?: { encode: (msg: any) => { finish: () => Uint8Array } };
}

let msgCoder: { [cmd: string]: I_msg_con } = {};

/** 配置编解码 */
export function getEncodeDecodeFunc(): { "msgEncode": (cmdId: number, msg: any) => Buffer, "msgDecode": (cmdId: number, msg: Buffer) => any } {
    initProto();

    return { "msgEncode": msgEncode, "msgDecode": msgDecode };
}

function initProto() {
    let routeCfg = app.routeConfig;
    for (let i = 0; i < routeCfg.length; i++) {
        let route = routeCfg[i];
        let routeStr = route.split(".").join("_");
        msgCoder[i] = { "c2s": (cs_msg as any)["c2s_" + routeStr], "s2c": (cs_msg as any)["s2c_" + routeStr] }
    }
}

function msgDecode(cmdId: number, msgBuf: Buffer): any {
    let msg = msgCoder[cmdId].c2s?.decode(msgBuf);
    console.log("--->>>", app.routeConfig[cmdId], JSON.stringify(msg));
    return msg;
}

function msgEncode(cmdId: number, data: any): Buffer {
    console.log("<<<---", app.routeConfig[cmdId], JSON.stringify(data));
    return msgCoder[cmdId].s2c?.encode(data).finish() as Buffer;
}