"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var child_process = require("child_process");
var readline = require("readline");
var protoClientDir = path.join(__dirname, "../../../protoClient"); // 客户端协议目录（服务器没有客户端svn权限，故将协议生成到公用目录，由客户端自己拉取）
console.time("cmd build ok ");
routeBuild(function () {
    console.timeEnd("cmd build ok ");
    console.time("proto build ok ");
    var fileArr = fs.readdirSync(path.join(__dirname, "../protoSrc"));
    fileArr.forEach(function (file) {
        if (!file.endsWith(".proto")) {
            return;
        }
        var basename = path.basename(file, ".proto");
        var proto_file = path.join(__dirname, "../protoSrc", file);
        var dist_js = path.join(__dirname, "../proto", basename + ".js");
        var dist_dts = path.join(__dirname, "../proto", basename + ".d.ts");
        // 服务器使用
        var cmd1 = "pbjs -t static-module -w commonjs -o " + dist_js + " " + proto_file;
        var cmd2 = "pbts -o " + dist_dts + " " + dist_js;
        execSync(cmd1);
        execSync(cmd2);
        // 客户端协议目录。 注： creator 使用需要将文件中 require("protobufjs/minimal") 替换为 protobuf
        var text = fs.readFileSync(dist_js).toString();
        text = text.replace("require(\"protobufjs/minimal\")", "protobuf");
        fs.writeFileSync(path.join(protoClientDir, path.basename(dist_js)), text);
        fs.copyFileSync(dist_dts, path.join(protoClientDir, path.basename(dist_dts)));
    });
    console.timeEnd("proto build ok ");
});
function execSync(cmd) {
    child_process.execSync(cmd);
}
function routeBuild(cb) {
    var routePath = "../config/sys/route.ts";
    var serverPath = "../config/cmd.ts";
    var filepath = path.join(__dirname, routePath);
    if (!fs.existsSync(filepath)) {
        console.log("  ->  Not find the script: " + filepath);
        process.exit();
    }
    var readStream = fs.createReadStream(filepath);
    var read_l = readline.createInterface({ "input": readStream });
    var hasStart = false;
    var cmdObjArr = [];
    read_l.on("line", function (line) {
        line = line.trim();
        if (line === "") {
            return;
        }
        if (!hasStart) {
            if (line.indexOf("export") === 0)
                hasStart = true;
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
        var index = line.indexOf('"');
        if (index === -1) {
            return;
        }
        var cmd = line.substring(0, index);
        var note = "";
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
        var endStr = "export const enum cmd {\n";
        var index = 0;
        for (var _i = 0, cmdObjArr_1 = cmdObjArr; _i < cmdObjArr_1.length; _i++) {
            var one = cmdObjArr_1[_i];
            if (one.note) {
                endStr += "\t/**\n\t * " + one.note + "\n\t */\n";
            }
            var oneStr = one.cmd;
            if (one.cmd.indexOf('.') !== -1) {
                var tmpArr = one.cmd.split('.');
                oneStr = tmpArr[0] + '_' + tmpArr[1] + '_' + tmpArr[2];
            }
            endStr += "\t" + oneStr + " = " + index + ",\n";
            index++;
        }
        endStr += '}';
        fs.writeFileSync(path.join(__dirname, serverPath), endStr);
    }
    function clientCmd() {
        var endStrCs = 'public class Cmd\n{\n';
        var endStrTs = 'export const enum cmd {\n';
        for (var _i = 0, cmdObjArr_2 = cmdObjArr; _i < cmdObjArr_2.length; _i++) {
            var one = cmdObjArr_2[_i];
            if (one.note) {
                endStrCs += "\t/// <summary>\n\t/// " + one.note + "\n\t/// </summary>\n";
                endStrTs += "\t/**\n\t * " + one.note + "\n\t */\n";
            }
            var oneStr = one.cmd;
            if (one.cmd.indexOf('.') !== -1) {
                var tmpArr = one.cmd.split('.');
                oneStr = tmpArr[0] + '_' + tmpArr[1] + '_' + tmpArr[2];
            }
            endStrCs += "\tpublic const string " + oneStr + " = \"" + one.cmd + "\";\n";
            endStrTs += "\t" + oneStr + " = \"" + one.cmd + "\",\n";
        }
        endStrCs += '}';
        endStrTs += '}';
        fs.writeFileSync(path.join(protoClientDir, "cmdClient.ts"), endStrTs);
    }
}
