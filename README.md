# protobuf_demo

#### 介绍
mydog与cocos creator的protobuf通信demo

#### 使用说明

1.  `proto`文件在服务器的`protoSrc`目录，由服务器程序编辑，服务器运行`buildProto.bat`将会编译相关proto文件（具体代码在`tool/protoBuild.ts`）
2.  客户端的协议文件被生成在`protoClient`目录，客户端主动替换项目工程里的相关文件。
3.  需要安装npm包： `npm i protobufjs -g`，项目本地目录也需安装`npm i protobufjs` 和 `npm i @types/protobufjs`
4.  协议名约定是 s2c_ 和 c2s_ 加上协议名的拼接
