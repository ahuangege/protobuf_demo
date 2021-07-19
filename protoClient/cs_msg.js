/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.cs_msg = (function() {

    /**
     * Namespace cs_msg.
     * @exports cs_msg
     * @namespace
     */
    var cs_msg = {};

    cs_msg.c2s_connector_main_ping = (function() {

        /**
         * Properties of a c2s_connector_main_ping.
         * @memberof cs_msg
         * @interface Ic2s_connector_main_ping
         * @property {number|null} [age] c2s_connector_main_ping age
         * @property {string|null} [name] c2s_connector_main_ping name
         */

        /**
         * Constructs a new c2s_connector_main_ping.
         * @memberof cs_msg
         * @classdesc Represents a c2s_connector_main_ping.
         * @implements Ic2s_connector_main_ping
         * @constructor
         * @param {cs_msg.Ic2s_connector_main_ping=} [properties] Properties to set
         */
        function c2s_connector_main_ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_connector_main_ping age.
         * @member {number} age
         * @memberof cs_msg.c2s_connector_main_ping
         * @instance
         */
        c2s_connector_main_ping.prototype.age = 0;

        /**
         * c2s_connector_main_ping name.
         * @member {string} name
         * @memberof cs_msg.c2s_connector_main_ping
         * @instance
         */
        c2s_connector_main_ping.prototype.name = "";

        /**
         * Creates a new c2s_connector_main_ping instance using the specified properties.
         * @function create
         * @memberof cs_msg.c2s_connector_main_ping
         * @static
         * @param {cs_msg.Ic2s_connector_main_ping=} [properties] Properties to set
         * @returns {cs_msg.c2s_connector_main_ping} c2s_connector_main_ping instance
         */
        c2s_connector_main_ping.create = function create(properties) {
            return new c2s_connector_main_ping(properties);
        };

        /**
         * Encodes the specified c2s_connector_main_ping message. Does not implicitly {@link cs_msg.c2s_connector_main_ping.verify|verify} messages.
         * @function encode
         * @memberof cs_msg.c2s_connector_main_ping
         * @static
         * @param {cs_msg.Ic2s_connector_main_ping} message c2s_connector_main_ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_connector_main_ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.age);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified c2s_connector_main_ping message, length delimited. Does not implicitly {@link cs_msg.c2s_connector_main_ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cs_msg.c2s_connector_main_ping
         * @static
         * @param {cs_msg.Ic2s_connector_main_ping} message c2s_connector_main_ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_connector_main_ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_connector_main_ping message from the specified reader or buffer.
         * @function decode
         * @memberof cs_msg.c2s_connector_main_ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cs_msg.c2s_connector_main_ping} c2s_connector_main_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_connector_main_ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cs_msg.c2s_connector_main_ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.age = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_connector_main_ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cs_msg.c2s_connector_main_ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cs_msg.c2s_connector_main_ping} c2s_connector_main_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_connector_main_ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_connector_main_ping message.
         * @function verify
         * @memberof cs_msg.c2s_connector_main_ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_connector_main_ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a c2s_connector_main_ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cs_msg.c2s_connector_main_ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cs_msg.c2s_connector_main_ping} c2s_connector_main_ping
         */
        c2s_connector_main_ping.fromObject = function fromObject(object) {
            if (object instanceof $root.cs_msg.c2s_connector_main_ping)
                return object;
            var message = new $root.cs_msg.c2s_connector_main_ping();
            if (object.age != null)
                message.age = object.age | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a c2s_connector_main_ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cs_msg.c2s_connector_main_ping
         * @static
         * @param {cs_msg.c2s_connector_main_ping} message c2s_connector_main_ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_connector_main_ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.age = 0;
                object.name = "";
            }
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this c2s_connector_main_ping to JSON.
         * @function toJSON
         * @memberof cs_msg.c2s_connector_main_ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_connector_main_ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_connector_main_ping;
    })();

    cs_msg.s2c_connector_main_ping = (function() {

        /**
         * Properties of a s2c_connector_main_ping.
         * @memberof cs_msg
         * @interface Is2c_connector_main_ping
         * @property {number|null} [code] s2c_connector_main_ping code
         * @property {string|null} [msg] s2c_connector_main_ping msg
         */

        /**
         * Constructs a new s2c_connector_main_ping.
         * @memberof cs_msg
         * @classdesc Represents a s2c_connector_main_ping.
         * @implements Is2c_connector_main_ping
         * @constructor
         * @param {cs_msg.Is2c_connector_main_ping=} [properties] Properties to set
         */
        function s2c_connector_main_ping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_connector_main_ping code.
         * @member {number} code
         * @memberof cs_msg.s2c_connector_main_ping
         * @instance
         */
        s2c_connector_main_ping.prototype.code = 0;

        /**
         * s2c_connector_main_ping msg.
         * @member {string} msg
         * @memberof cs_msg.s2c_connector_main_ping
         * @instance
         */
        s2c_connector_main_ping.prototype.msg = "";

        /**
         * Creates a new s2c_connector_main_ping instance using the specified properties.
         * @function create
         * @memberof cs_msg.s2c_connector_main_ping
         * @static
         * @param {cs_msg.Is2c_connector_main_ping=} [properties] Properties to set
         * @returns {cs_msg.s2c_connector_main_ping} s2c_connector_main_ping instance
         */
        s2c_connector_main_ping.create = function create(properties) {
            return new s2c_connector_main_ping(properties);
        };

        /**
         * Encodes the specified s2c_connector_main_ping message. Does not implicitly {@link cs_msg.s2c_connector_main_ping.verify|verify} messages.
         * @function encode
         * @memberof cs_msg.s2c_connector_main_ping
         * @static
         * @param {cs_msg.Is2c_connector_main_ping} message s2c_connector_main_ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_connector_main_ping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified s2c_connector_main_ping message, length delimited. Does not implicitly {@link cs_msg.s2c_connector_main_ping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cs_msg.s2c_connector_main_ping
         * @static
         * @param {cs_msg.Is2c_connector_main_ping} message s2c_connector_main_ping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_connector_main_ping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_connector_main_ping message from the specified reader or buffer.
         * @function decode
         * @memberof cs_msg.s2c_connector_main_ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cs_msg.s2c_connector_main_ping} s2c_connector_main_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_connector_main_ping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cs_msg.s2c_connector_main_ping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_connector_main_ping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cs_msg.s2c_connector_main_ping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cs_msg.s2c_connector_main_ping} s2c_connector_main_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_connector_main_ping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_connector_main_ping message.
         * @function verify
         * @memberof cs_msg.s2c_connector_main_ping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_connector_main_ping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a s2c_connector_main_ping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cs_msg.s2c_connector_main_ping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cs_msg.s2c_connector_main_ping} s2c_connector_main_ping
         */
        s2c_connector_main_ping.fromObject = function fromObject(object) {
            if (object instanceof $root.cs_msg.s2c_connector_main_ping)
                return object;
            var message = new $root.cs_msg.s2c_connector_main_ping();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a s2c_connector_main_ping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cs_msg.s2c_connector_main_ping
         * @static
         * @param {cs_msg.s2c_connector_main_ping} message s2c_connector_main_ping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_connector_main_ping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this s2c_connector_main_ping to JSON.
         * @function toJSON
         * @memberof cs_msg.s2c_connector_main_ping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_connector_main_ping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_connector_main_ping;
    })();

    cs_msg.s2c_onHello = (function() {

        /**
         * Properties of a s2c_onHello.
         * @memberof cs_msg
         * @interface Is2c_onHello
         * @property {string|null} [msg] s2c_onHello msg
         */

        /**
         * Constructs a new s2c_onHello.
         * @memberof cs_msg
         * @classdesc Represents a s2c_onHello.
         * @implements Is2c_onHello
         * @constructor
         * @param {cs_msg.Is2c_onHello=} [properties] Properties to set
         */
        function s2c_onHello(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_onHello msg.
         * @member {string} msg
         * @memberof cs_msg.s2c_onHello
         * @instance
         */
        s2c_onHello.prototype.msg = "";

        /**
         * Creates a new s2c_onHello instance using the specified properties.
         * @function create
         * @memberof cs_msg.s2c_onHello
         * @static
         * @param {cs_msg.Is2c_onHello=} [properties] Properties to set
         * @returns {cs_msg.s2c_onHello} s2c_onHello instance
         */
        s2c_onHello.create = function create(properties) {
            return new s2c_onHello(properties);
        };

        /**
         * Encodes the specified s2c_onHello message. Does not implicitly {@link cs_msg.s2c_onHello.verify|verify} messages.
         * @function encode
         * @memberof cs_msg.s2c_onHello
         * @static
         * @param {cs_msg.Is2c_onHello} message s2c_onHello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_onHello.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified s2c_onHello message, length delimited. Does not implicitly {@link cs_msg.s2c_onHello.verify|verify} messages.
         * @function encodeDelimited
         * @memberof cs_msg.s2c_onHello
         * @static
         * @param {cs_msg.Is2c_onHello} message s2c_onHello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_onHello.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_onHello message from the specified reader or buffer.
         * @function decode
         * @memberof cs_msg.s2c_onHello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {cs_msg.s2c_onHello} s2c_onHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_onHello.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cs_msg.s2c_onHello();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_onHello message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof cs_msg.s2c_onHello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {cs_msg.s2c_onHello} s2c_onHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_onHello.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_onHello message.
         * @function verify
         * @memberof cs_msg.s2c_onHello
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_onHello.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a s2c_onHello message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof cs_msg.s2c_onHello
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {cs_msg.s2c_onHello} s2c_onHello
         */
        s2c_onHello.fromObject = function fromObject(object) {
            if (object instanceof $root.cs_msg.s2c_onHello)
                return object;
            var message = new $root.cs_msg.s2c_onHello();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a s2c_onHello message. Also converts values to other types if specified.
         * @function toObject
         * @memberof cs_msg.s2c_onHello
         * @static
         * @param {cs_msg.s2c_onHello} message s2c_onHello
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_onHello.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this s2c_onHello to JSON.
         * @function toJSON
         * @memberof cs_msg.s2c_onHello
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_onHello.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_onHello;
    })();

    return cs_msg;
})();

module.exports = $root;
