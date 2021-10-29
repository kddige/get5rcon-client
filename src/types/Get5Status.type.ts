type Get5Status = {
    gamestate: number;
    gamestate_string: string;
    plugin_version: string;
    paused: boolean;
    matchid?: string;
    loaded_config_file?: string;
    map_number?: number;
    team1?: Team1;
    team2?: Team2;
}

type Team1 = {
    current_map_score: number;
    connected_clients: number;
    ready: boolean;
    name: string;
    series_score: number;
    side: string;
}

type Team2 = {
    current_map_score: number;
    connected_clients: number;
    ready: boolean;
    name: string;
    series_score: number;
    side: string;
}


export default Get5Status;