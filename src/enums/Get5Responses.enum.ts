export enum Get5Responses {

  // Errors
  ERROR_MATCH_ALREADY_LOADED = "Cannot load a match when a match is already loaded",
  ERROR_MATCH_CONFIG_FAILED_TO_LOAD = "Failed to load match config.",
  ERROR_CANNOT_LOAD_URL_MISSING_STEAMWORKS = 'Cannot load matches from a url without the SteamWorks extension running',
  
  // Success
  SUCCESS_LOADED_MATCH_CONFIG = "[ Get5 ] Loaded match config.",
  SUCCESS_MATCH_ENDED = "[ Get5 ] An admin force ended the match.",
  

  // Default
  DEFAULT_UNKNOWN = "",
}
