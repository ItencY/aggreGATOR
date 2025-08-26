export type CommandHandler = (cmdName: string, ...args: string[]) => Promise<void>;
export type CommandRegistry = Record<string, CommandHandler>;

export async function registerCommand(registry: CommandRegistry, cmdName: string, handler: CommandHandler): Promise<void> {
    registry[cmdName] = handler;
}

export async function runCommand(registry: CommandRegistry, cmdName: string, ...args: string[]): Promise<void> {
    const handler = registry[cmdName];
    if (!handler) {
        throw new Error(`Unknown command: ${cmdName}`);
    }
    await handler(cmdName, ...args);
}