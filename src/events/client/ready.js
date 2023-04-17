const { ActivityType } = require("discord.js");

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		client.user.setPresence({
			process: process.pid,
			status: 'dnd'
		});
		// client.user.setActivity('Sea of Thieves 2023 Edition', { type: ActivityType.Playing/*, url: 'https://www.twitch.tv/pirateofhyrule'*/ });
    client.user.setActivity('for an update', { type: ActivityType.Watching });
    // client.user.setActivity('<game> on PirateOfHyrule\'s Twitch', { type: ActivityType.Streaming/*, url: 'https://www.twitch.tv/pirateofhyrule'*/ });
		console.log(`Ready!!! ${client.user.tag} is logged in and online.`);
	},
};
