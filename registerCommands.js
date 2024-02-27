const {REST,Routes} = require("discord.js");
require("dotenv").config();

const commands = [
    {
        name: "ping",
        description: "antwortet mit Pong",    
    },
];

const rest = new REST({version: "10"}).setToken(process.env.BOTTOKEN);

try {
    console.log("Starting refreshing commands");
    await rest.put(Routes.applicationCommand(process.env.CLIENTID)), {body: commands};
    console.log("successfully refreshed commands!");
} catch(error) {
    console.log("Fehler beim Laden der Commands: " + error);
}