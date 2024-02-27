const {Client, GatewayIntentBits} = require("discord.js");
require("dotenv").config();

const client  = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("error", (e) => {
    console.log("Fehler: " + e);
});


client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
});

client.login(process.env.BOTTOKEN);