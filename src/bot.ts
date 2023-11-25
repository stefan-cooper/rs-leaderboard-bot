import { Client } from "discord.js";
import { commandsConfig, config } from "./config";
import { commands } from "./commands";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", () => {
  console.log("Discord bot is ready! 🤖");
});

client.on("guildCreate", async (guild) => {
  await commandsConfig({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

// discordjs docs https://discord.js.org/#/docs/main/stable/class/MessageManager

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  // if author id is the webhook bot
  if (message.author.id === "107153571190935552") {

    // do some magic with the message from the webhook
    // { "id": "foo", "bossName": "bar", "time": "baz" }
    // const data = JSON.parse(message.content);
    // const time = data.time;

    // go find the channel and message that you want to update
    client.channels.cache
      .get("1177787525570498570") // channel id
      ?.messages.fetch("1177787690515714080") // message id
      .then((message) => {

        // if my time is quicker than the previous time, update

        message.edit("Hello stefan 123"); // edit the message
        message.reply("Leaderboard updated"); // send a reply to tell them that the leaderboard has been updated
      });
    return;
  }
  // message.reply("fuck off")
});

client.login(config.DISCORD_TOKEN);
