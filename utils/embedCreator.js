const { EmbedBuilder } = require("discord.js");
const { client } = require("../index");

function getHomeworkEmbed(taskname, subject, daysUntil, channelID) {
    const channel = client.channels.cache.find(channel => channel.id === channelID);
    const deadlineDays = daysUntil.toString();
    const embed = new EmbedBuilder()
        .setTitle(taskname)
        .addFields(
            { name: "subject:", value: subject },
            { name: "deadline (days from now):", value: deadlineDays },
        )
        .addFields({
            name: "info",
            value: "use /homework to create this embed in the homeworkchannel!"
        })
        .setImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fdone-homework-your.html&psig=AOvVaw2yMMCGwYakNgGgnt0KvfKE&ust=1709226198047000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjR-PXBzoQDFQAAAAAdAAAAABAJ")
        .setTimestamp()
        .setFooter({
            text: "embed homework created by @der wächter des trabenz! developed with js by @pawianberater",
            iconURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ardmediathek.de%2Fvideo%2Fnatuerlich%2Fein-trabi-wird-e-mobil%2Fswr%2FY3JpZDovL3N3ci5kZS9hZXgvbzEyNTc4ODc&psig=AOvVaw1N7m2hfjtExlUxDQ8VoPuC&ust=1709227364422000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj716DGzoQDFQAAAAAdAAAAABAT"
        });
    console.log("EMBED IN FILE: " + embed);
    channel.send(embed);
}


module.exports = { getHomeworkEmbed };