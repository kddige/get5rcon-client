import RCON from "rcon-srcds";
import { Get5Commands, Get5Responses } from "../enums";
import { Get5ClientInterface } from "../interfaces";
import { Get5ClientOptions, Get5Response, Get5Status } from "../types";


export class Get5Client implements Get5ClientInterface {
    options: Get5ClientOptions;
    server: RCON;
    



    constructor(options: Get5ClientOptions) {
        this.options = options;
        this.server = new RCON(options.rcon);
    }
    get5_loadbackup(): Promise<Get5Response<string>> {
        throw new Error("Method not implemented.");
    }
    get5_loadteam(): Promise<Get5Response<string>> {
        throw new Error("Method not implemented.");
    }
    get5_creatematch(): Promise<Get5Response<string>> {
        throw new Error("Method not implemented.");
    }
    get5_scrim(): Promise<Get5Response<string>> {
        throw new Error("Method not implemented.");
    }
    get5_addkickedplayer(player: string): Promise<Get5Response<string>> {
        throw new Error("Method not implemented.");
    }
    get5_removekickedplayer(player: string): Promise<Get5Response<string>> {
        throw new Error("Method not implemented.");
    }
    get5_dumpstats(): Promise<Get5Response<string>> {
        throw new Error("Method not implemented.");
    }
    get5_status(): Promise<Get5Response<Get5Status>> {
        throw new Error("Method not implemented.");
    }
    get5_listbackups(): Promise<Get5Response<string>> {
        throw new Error("Method not implemented.");
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
    async get5_loadmatch_url(url: string): Promise<Get5Response<string>> {
        const command = this.createCommand(Get5Commands.GET5_LOADMATCH_URL, url);
        return await this.executeCommand<string>(command, Get5Responses.SUCCESS_LOADED_MATCH_CONFIG);
    }
    async get5_endmatch(): Promise<Get5Response<string>> {
        const command = this.createCommand(Get5Commands.GET5_ENDMATCH, "");
        return await this.executeCommand<string>(command, Get5Responses.SUCCESS_MATCH_ENDED);
    }
    async get5_addplayer(player: string, team: 'team1'|'team2'|'spec'): Promise<Get5Response<string>> {
        const command = this.createCommand(Get5Commands.GET5_ADDPLAYER, `"${player}" ${team}`);
        return await this.executeCommand<string>(command, Get5Responses.SUCCESS_PLAYER_ADDED);
    }
    async get5_removeplayer(player: string): Promise<Get5Response<string>> {
        const command = this.createCommand(Get5Commands.GET5_REMOVEPLAYER, `"${player}"`);
        return await this.executeCommand<string>(command, Get5Responses.SUCCESS_PLAYER_REMOVED);
    }
    get5_forceready(): Promise<Get5Response<string>> {
        const command = this.createCommand(Get5Commands.GET5_FORCEREADY, "");
        return this.executeCommand<string>(command, Get5Responses.SUCCESS_FORCEREADY);
    }
    createCommand(command: Get5Commands, args: string): string {
        return `${command} ${args}`;
    }
    async executeCommand<T>(command: string, expectedResponse: Get5Responses, isJson = false): Promise<Get5Response<T>> {
        if (!this.isAutneticated) {
            return Promise.reject(new Error("Not autneticated"));
        }
        const resp = await this.server.execute(command).then(resp => resp.toString());


        if (isJson) {
            return {
                data: JSON.parse(resp) as T,
                isSuccess: true
            };
        }


        const respObj = {
            data: (resp as unknown as T),
            isSuccess: resp.includes(expectedResponse)
        };
        return respObj;
    }
    /**
     * Autenticates, and connects to the server
     */
    async connect(): Promise<boolean> {
        const success = this.server.authenticate(this.options.rconPassword);

        return success;
    }
    disconnect(): Promise<void> {
        return this.server.disconnect();
    }
    get isAutneticated(): boolean {
        return this.server.isAuthenticated();
    }
    get isConnected(): boolean {
        return this.server.isConnected();
    }
}