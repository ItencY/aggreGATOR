import { deleteUsers } from "src/lib/db/queries/users";

export async function handlerReset() {
    await deleteUsers();
    console.log("Database reset successfully!");
}