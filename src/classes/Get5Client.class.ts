import RCON from "rcon-srcds";
import { Get5Commands, Get5Responses } from "../enums";
import { Get5ClientInterface } from "../interfaces";
import { Get5ClientOptions, Get5Response } from "../types";


export class Get5Client implements Get5ClientInterface {
    options: Get5ClientOptions;
    server: RCON;
    



    constructor(options: Get5ClientOptions) {
        this.options = options;
        this.server = new RCON(options.rcon);
    }

    /**
     * 
     * @param path the path to the match config file in the csgo directory
     * @returns a repose object with repsonse data and a boolean isSuccess
     */
    async get5_loadmatch(path: string): Promise<Get5Response<string>> {
        const command = this.createCommand(Get5Commands.GET5_LOADMATCH, path);
        return await this.executeCommand(command, Get5Responses.SUCCESS_LOADED_MATCH_CONFIG);
    }
    async get5_loadbackup(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_loadteam(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_loadmatch_url(url: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_endmatch(): Promise<Get5Response<string>> {
        const command = this.createCommand(Get5Commands.GET5_ENDMATCH, "");
        return await this.executeCommand<string>(command, Get5Responses.SUCCESS_MATCH_ENDED);
    }
    async get5_creatematch(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_scrim(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_addplayer(player: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_removeplayer(player: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_addkickedplayer(player: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_removekickedplayer(player: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_forceready(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_dumpstats(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_status(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async get5_listbackups(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }



    createCommand(command: Get5Commands, args: string): string {
        return `${command} ${args}`;
    }

    async executeCommand<T>(command: string, expectedResponse: Get5Responses): Promise<Get5Response<T>> {
        if (!this.isAutneticated) {
            return Promise.reject(new Error("Not autneticated"));
        }
        const resp = await this.server.execute(command).then(resp => resp.toString());
        const respJson = JSON.parse(resp) as T;
        const respObj: Get5Response<T> = {
            data: respJson,
            isSuccess: resp.includes(expectedResponse)
        };
        return respObj
    }

    /**
     * Autenticates, and connects to the server
     */
    async connect(): Promise<boolean> {
        const success = this.server.authenticate(this.options.rconPassword);

        return success;
    }

    disconnect(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    get isAutneticated(): boolean {
        return this.server.isAuthenticated();
    }

    get isConnected(): boolean {
        return this.server.isConnected();
    }


}