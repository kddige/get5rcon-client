type EncodingOptions = "ascii" | "utf8"

type RconOptions = {
    host?: string;
    port?: number;
    maxPacketSize?: number;
    encoding?: EncodingOptions;
    timeout?: number;
}

type Get5ClientOptions = {
    rcon: RconOptions;
    rconPassword: string;
}

export default Get5ClientOptions;