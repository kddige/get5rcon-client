interface Get5ClientInterface {
  /** Server Address of the CS:GO Dedicated Server*/
  server: string;
  /**Port of the CS:GO Dedicated Server*/
  port: number;
  /**Password to use for RCON Connection - set in server.cfg > rcon_password "MYPASSWORD" */
  password: string;
}
