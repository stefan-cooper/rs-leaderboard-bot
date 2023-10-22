import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "./types";

const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

const execute = async (interaction: CommandInteraction) => {
  return interaction.reply("Pong!");
}

export const ping: Command = {
  data,
  execute,
};