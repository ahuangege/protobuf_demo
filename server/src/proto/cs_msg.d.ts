import * as $protobuf from "protobufjs";
/** Namespace cs_msg. */
export namespace cs_msg {

    /** Properties of a c2s_connector_main_ping. */
    interface Ic2s_connector_main_ping {

        /** c2s_connector_main_ping age */
        age?: (number|null);

        /** c2s_connector_main_ping name */
        name?: (string|null);
    }

    /** Represents a c2s_connector_main_ping. */
    class c2s_connector_main_ping implements Ic2s_connector_main_ping {

        /**
         * Constructs a new c2s_connector_main_ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: cs_msg.Ic2s_connector_main_ping);

        /** c2s_connector_main_ping age. */
        public age: number;

        /** c2s_connector_main_ping name. */
        public name: string;

        /**
         * Creates a new c2s_connector_main_ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_connector_main_ping instance
         */
        public static create(properties?: cs_msg.Ic2s_connector_main_ping): cs_msg.c2s_connector_main_ping;

        /**
         * Encodes the specified c2s_connector_main_ping message. Does not implicitly {@link cs_msg.c2s_connector_main_ping.verify|verify} messages.
         * @param message c2s_connector_main_ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cs_msg.Ic2s_connector_main_ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_connector_main_ping message, length delimited. Does not implicitly {@link cs_msg.c2s_connector_main_ping.verify|verify} messages.
         * @param message c2s_connector_main_ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cs_msg.Ic2s_connector_main_ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_connector_main_ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_connector_main_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cs_msg.c2s_connector_main_ping;

        /**
         * Decodes a c2s_connector_main_ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_connector_main_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cs_msg.c2s_connector_main_ping;

        /**
         * Verifies a c2s_connector_main_ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_connector_main_ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_connector_main_ping
         */
        public static fromObject(object: { [k: string]: any }): cs_msg.c2s_connector_main_ping;

        /**
         * Creates a plain object from a c2s_connector_main_ping message. Also converts values to other types if specified.
         * @param message c2s_connector_main_ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cs_msg.c2s_connector_main_ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_connector_main_ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_connector_main_ping. */
    interface Is2c_connector_main_ping {

        /** s2c_connector_main_ping code */
        code?: (number|null);

        /** s2c_connector_main_ping msg */
        msg?: (string|null);
    }

    /** Represents a s2c_connector_main_ping. */
    class s2c_connector_main_ping implements Is2c_connector_main_ping {

        /**
         * Constructs a new s2c_connector_main_ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: cs_msg.Is2c_connector_main_ping);

        /** s2c_connector_main_ping code. */
        public code: number;

        /** s2c_connector_main_ping msg. */
        public msg: string;

        /**
         * Creates a new s2c_connector_main_ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_connector_main_ping instance
         */
        public static create(properties?: cs_msg.Is2c_connector_main_ping): cs_msg.s2c_connector_main_ping;

        /**
         * Encodes the specified s2c_connector_main_ping message. Does not implicitly {@link cs_msg.s2c_connector_main_ping.verify|verify} messages.
         * @param message s2c_connector_main_ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cs_msg.Is2c_connector_main_ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_connector_main_ping message, length delimited. Does not implicitly {@link cs_msg.s2c_connector_main_ping.verify|verify} messages.
         * @param message s2c_connector_main_ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cs_msg.Is2c_connector_main_ping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_connector_main_ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_connector_main_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cs_msg.s2c_connector_main_ping;

        /**
         * Decodes a s2c_connector_main_ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_connector_main_ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cs_msg.s2c_connector_main_ping;

        /**
         * Verifies a s2c_connector_main_ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_connector_main_ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_connector_main_ping
         */
        public static fromObject(object: { [k: string]: any }): cs_msg.s2c_connector_main_ping;

        /**
         * Creates a plain object from a s2c_connector_main_ping message. Also converts values to other types if specified.
         * @param message s2c_connector_main_ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cs_msg.s2c_connector_main_ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_connector_main_ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_onHello. */
    interface Is2c_onHello {

        /** s2c_onHello msg */
        msg?: (string|null);
    }

    /** Represents a s2c_onHello. */
    class s2c_onHello implements Is2c_onHello {

        /**
         * Constructs a new s2c_onHello.
         * @param [properties] Properties to set
         */
        constructor(properties?: cs_msg.Is2c_onHello);

        /** s2c_onHello msg. */
        public msg: string;

        /**
         * Creates a new s2c_onHello instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_onHello instance
         */
        public static create(properties?: cs_msg.Is2c_onHello): cs_msg.s2c_onHello;

        /**
         * Encodes the specified s2c_onHello message. Does not implicitly {@link cs_msg.s2c_onHello.verify|verify} messages.
         * @param message s2c_onHello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cs_msg.Is2c_onHello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_onHello message, length delimited. Does not implicitly {@link cs_msg.s2c_onHello.verify|verify} messages.
         * @param message s2c_onHello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cs_msg.Is2c_onHello, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_onHello message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_onHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cs_msg.s2c_onHello;

        /**
         * Decodes a s2c_onHello message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_onHello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cs_msg.s2c_onHello;

        /**
         * Verifies a s2c_onHello message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_onHello message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_onHello
         */
        public static fromObject(object: { [k: string]: any }): cs_msg.s2c_onHello;

        /**
         * Creates a plain object from a s2c_onHello message. Also converts values to other types if specified.
         * @param message s2c_onHello
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cs_msg.s2c_onHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_onHello to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
