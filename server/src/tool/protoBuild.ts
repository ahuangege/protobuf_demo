import * as path from "path";
import * as fs from "fs";
import * as child_process from "child_process";
import * as readline from "readline";

let protoClientDir = path.join(__dirname, "../../../protoClient");      // 客户端协议目录（服务器没有客户端svn权限，故将协议生成到公用目录，由客户端自己拉取）

console.time("cmd build ok ");
routeBuild(() => {
    console.timeEnd("cmd build ok ");

    console.time("proto build ok ");
    let fileArr = fs.readdirSync(path.join(__dirname, "../protoSrc"));
    fileArr.forEach((file) => {
        if (!file.endsWith(".proto")) {
            return;
        }
        let basename = path.basename(file, ".proto");
        let proto_file = path.join(__dirname, "../protoSrc", file);
        let dist_js = path.join(__dirname, "../proto", basename + ".js");
        let dist_dts = path.join(__dirname, "../proto", basename + ".d.ts");


        // 服务器使用
        let cmd1 = `pbjs -t static-module -w commonjs -o ${dist_js} ${proto_file}`;
        let cmd2 = `pbts -o ${dist_dts} ${dist_js}`;
        execSync(cmd1);
        execSync(cmd2);


        // 客户端协议目录。 注： creator 使用需要将文件中 require("protobufjs/minimal") 替换为 protobuf
        let text = fs.readFileSync(dist_js).toString();
        text = text.replace(`require("protobufjs/minimal")`, `protobuf`);
        fs.writeFileSync(path.join(protoClientDir, path.basename(dist_js)), text);
        fs.copyFileSync(dist_dts, path.join(protoClientDir, path.basename(dist_dts)));

    });

    console.timeEnd("proto build ok ");

});





function execSync(cmd: string) {
    child_process.execSync(cmd);
}



function routeBuild(cb: Function) {
    let routePath = "../config/sys/route.ts";
    let serverPath = "../config/cmd.ts";

    let filepath = path.join(__dirname, routePath);
    if (!fs.existsSync(filepath)) {
        console.log("  ->  Not find the script: " + filepath);
        process.exit();
    }
    let readStream = fs.createReadStream(filepath);
    let read_l = readline.createInterface({ "input": readStream });

    let hasStart = false;
    let cmdObjArr: { "cmd": string, "note": string }[] = [];

    read_l.on("line", function (line) {
        line = line.trim();
        if (line === "") {
            return;
        }
        if (!hasStart) {
            if (line.indexOf("export") === 0) hasStart = true;
            return;
        }
        if (line.indexOf("]") === 0) {
            serverCmd();
            clientCmd();
            read_l.close();
            return;
        }
        if (line.indexOf('"') !== 0) {
            return;
        }
        line = line.substring(1);
        let index = line.indexOf('"');
        if (index === -1) {
            return;
        }

        let cmd = line.substring(0, index);
        let note = "";
        index = line.indexOf("//");
        if (index !== -1) {
            note = line.substring(index + 2).trim();
        }
        cmdObjArr.push({ "cmd": cmd, "note": note });
    });

    read_l.on("close", function () {
        cb && cb();
    });


    function serverCmd() {
        let endStr = `export const enum cmd {\n`
        let index = 0;
        for (let one of cmdObjArr) {
            if (one.note) {
                endStr += `\t/**\n\t * ${one.note}\n\t */\n`;
            }
            let oneStr = one.cmd;
            if (one.cmd.indexOf('.') !== -1) {
                let tmpArr = one.cmd.split('.');
                oneStr = tmpArr[0] + '_' + tmpArr[1] + '_' + tmpArr[2];
            }
            endStr += `\t${oneStr} = ${index},\n`;
            index++;
        }
        endStr += '}';

        fs.writeFileSync(path.join(__dirname, serverPath), endStr);
    }

    function clientCmd() {
        let endStrCs = 'public class Cmd\n{\n'
        let endStrTs = 'export const enum cmd {\n'
        for (let one of cmdObjArr) {
            if (one.note) {
                endStrCs += `\t/// <summary>\n\t/// ${one.note}\n\t/// </summary>\n`;
                endStrTs += `\t/**\n\t * ${one.note}\n\t */\n`;
            }
            let oneStr = one.cmd;
            if (one.cmd.indexOf('.') !== -1) {
                let tmpArr = one.cmd.split('.');
                oneStr = tmpArr[0] + '_' + tmpArr[1] + '_' + tmpArr[2];
            }
            endStrCs += `\tpublic const string ${oneStr} = "${one.cmd}";\n`;
            endStrTs += `\t${oneStr} = "${one.cmd}",\n`;
        }

        endStrCs += '}';
        endStrTs += '}';
        fs.writeFileSync(path.join(protoClientDir, "cmdClient.ts"), endStrTs);
    }

}

