/** Represents a command in our trampoline mechanism. */
export interface ITrampolineCommand {
  /**
   * Identifier of the command.
   *
   * This will be used to find a suitable handler in the app to react to the
   * command.
   */
  readonly identifier: string

  /**
   * Parameters of the command.
   *
   * This corresponds to the command line arguments (argv).
   */
  readonly parameters: ReadonlyArray<string>

  /** Environment variables that were set when the command was invoked. */
  readonly environmentVariables: ReadonlyMap<string, string>
}

/**
 * Represents a handler function for a trampoline command.
 *
 * @param   command The invoked trampoline command to handle.
 * @returns         A string with the result of the command (which will be
 * printed via
 *          stdout by the trampoline client), or undefined
 */
export type TrampolineCommandHandler = (
  command: ITrampolineCommand
) => Promise<string | undefined>
