# rs-leaderboard-bot

A discord bot for managing a Runescape clan's speedrunning leaderboard.

## Contributing

See [Contributing.md](./Contributing.md) for more information on how to contribute to this project.

## Getting Started

### Prerequisites

`node` and `npm` LTS are required to run this project. You can download them from [here](https://nodejs.org/en/). Optionally, you can use nvm to manage your node versions. You can download nvm from [here](https://github.com/nvm-sh/nvm).

### Environment Variables

There are two env vars that are needed to run the bot. They both come from the discord developer portal.

Access the discord developer portal [here](https://discord.com/developers/applications).

You should create an application, and a bot within that application. Once created, you should be able to copy the token from the bot page.

Create a `.env` file in the root of the project, and add the following:

```
DISCORD_TOKEN=<your_bot_token>
DISCORD_CLIENT_ID=<your_application_id>
```

### Installing

1. `npm install`

### Running in dev

1. `npm run dev`

### Testing

TODO

## Documentation

### Project Structure

TODO

### Test strategy

TODO

## Continuous Integration

TODO