const { SlashCommandBuilder } = require('discord.js');
require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('homework')
        .setDescription('send a homework message in the homeworkchannel')
        .addStringOption(option =>
            option.setName('taskname').setDescription('name of the task').setRequired(true))
        .addStringOption(option =>
            option.setName("subject").setDescription("subject the homework from").setRequired(true))
        .addIntegerOption(option =>
            option.setName("days").setDescription("the days until the homework must be finished").setRequired(true)),
    async execute(interaction) {
        //Import
        const { getHomeworkEmbed } = require("../../utils/embedCreator");

        let name = interaction.options.getString('taskname');
        let subject = interaction.options.getString("subject");
        let daysUntil = interaction.options.getInteger("days");

        //create and save embed
        const embed = getHomeworkEmbed(name, subject, daysUntil, process.env.HOMEWORKCHANNEL);
        //send message in the homework-channel
        console.log("Embed: " + embed);
    },
};