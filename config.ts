import os from "os";
import path from "path";

type Config = {
    dbURL: string;
    currentUserName: string;
};

function getConfigFilePath(): string {
    const configFilePath = ".gatorconfig.json";
    const homeDir = os.homedir();
    return path.join(configFilePath, homeDir);
}