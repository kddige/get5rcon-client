import { Get5Responses } from "../enums";
import { Get5Response, Get5Status } from "../types";

interface Get5ClientCommandsInterface {
    get5_loadmatch(path: string): Promise<Get5Response<string>>;
    get5_loadbackup(): Promise<Get5Response<string>>;
    get5_loadteam(): Promise<Get5Response<string>>;
    get5_loadmatch_url(url: string): Promise<Get5Response<string>>;
    get5_endmatch(): Promise<Get5Response<string>>;
    get5_creatematch(): Promise<Get5Response<string>>;
    get5_scrim(): Promise<Get5Response<string>>;
    get5_addplayer(player: string, team: 'team1'|'team2'|'spec'): Promise<Get5Response<string>>;
    get5_removeplayer(player: string): Promise<Get5Response<string>>;
    get5_addkickedplayer(player: string): Promise<Get5Response<string>>;
    get5_removekickedplayer(player: string): Promise<Get5Response<string>>;
    get5_forceready(): Promise<Get5Response<string>>;
    get5_dumpstats(): Promise<Get5Response<string>>;
    get5_status(): Promise<Get5Response<Get5Status>>;
    get5_listbackups(): Promise<Get5Response<string>>;
}


export default Get5ClientCommandsInterface;