import { Get5Commands, Get5Responses } from "../enums";
import { Get5ClientOptions, Get5Response } from "../types";
import RCON from 'rcon-srcds';
import { Get5ClientCommandsInterface } from ".";

export default interface Get5ClientInterface extends Get5ClientCommandsInterface {
  /**
   * Options to be used by the client eg. server, port, etc.
   * @param {Get5ClientOptions} options
   */
  options: Get5ClientOptions;

  /**
   * The server instance eg. RCON client;
   */
  server: RCON;


  connect(): Promise<boolean>;


  disconnect(): Promise<void>;


  createCommand(command: Get5Commands, args: string): string;

  executeCommand<T>(command: string, expectedResponse: Get5Responses, isJson?: boolean): Promise<Get5Response<T>>;

  get isAutneticated(): boolean;

  get isConnected(): boolean;
}
