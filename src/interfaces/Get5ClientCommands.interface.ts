import { Get5Response, Get5Status } from "../types";

interface Get5ClientCommandsInterface {
    get5_loadmatch(path: string): Promise<Get5Response<string>>;
    get5_loadbackup(): Promise<boolean>;
    get5_loadteam(): Promise<boolean>;
    get5_loadmatch_url(url: string): Promise<boolean>;
    get5_endmatch(): Promise<Get5Response<string>>;
    get5_creatematch(): Promise<boolean>;
    get5_scrim(): Promise<boolean>;
    get5_addplayer(player: string): Promise<boolean>;
    get5_removeplayer(player: string): Promise<boolean>;
    get5_addkickedplayer(player: string): Promise<boolean>;
    get5_removekickedplayer(player: string): Promise<boolean>;
    get5_forceready(): Promise<boolean>;
    get5_dumpstats(): Promise<boolean>;
    get5_status(): Promise<Get5Response<Get5Status>>;
    get5_listbackups(): Promise<boolean>;
}


export default Get5ClientCommandsInterface;