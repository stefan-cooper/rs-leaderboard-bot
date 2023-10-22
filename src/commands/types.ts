import { CommandInteraction, InteractionResponse, SlashCommandBuilder } from "discord.js";

export interface Command {
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<InteractionResponse<boolean>>;
}