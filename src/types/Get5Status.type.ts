type Get5Status = {
    matchid: string;
    gamestate: number;
    gamestate_string: string;
    loaded_config_file: string;
    plugin_version: string;
    map_number: number;
    team1: Team1;
    team2: Team2;
    paused: boolean;
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