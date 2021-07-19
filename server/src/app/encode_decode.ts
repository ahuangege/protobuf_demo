import { app, I_encodeDecodeConfig } from "mydog";
import { cmd } from "../config/cmd";
import { cs_msg } from "../proto/cs_msg";



/** 配置编解码 */
export function getEncodeDecodeFunc(): { "msgEncode": (cmdId: number, msg: any) => Buffer, "msgDecode": (cmdId: number, msg: Buffer) => any } {
    return { "msgEncode": msgEncode, "msgDecode": msgDecode };
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



// 编码时直接中转Buffer
let encode_buffer = {
    "encode": function (data: Buffer) {
        return {
            "finish": function () {
                return data;
            }
        }
    }
}
// 解码时直接中转Buffer
let decode_buffer = {
    "decode": function (data: Buffer) {
        return data;
    }
}


interface I_msg_con {
    c2s?: { decode: (msg: Buffer) => any };
    s2c?: { encode: (msg: any) => { finish: () => Uint8Array } };
}


let msgCoder: { [cmd: string]: I_msg_con } = {};
msgCoder[cmd.connector_main_ping] = { "c2s": cs_msg.c2s_connector_main_ping, "s2c": cs_msg.s2c_connector_main_ping };
msgCoder[cmd.onHello] = { "s2c": cs_msg.s2c_onHello };


