import { Command } from "../struct/Command";
import { Message } from "eris";

export default class extends Command {
  constructor(client) {
    super(client, {
      name: 'countrylist',
      aliases: [],
      description: 'Get all affected countries',
      cat: 'virus'
    });
  }
  async exec(message: Message, args: string[]) {
    const res = await require('node-fetch')(`https://corona.lmao.ninja/all`);
    const data = await res.json();

    message.channel.createMessage({
      embed: {
        author: {
          name: 'COVID-19 countries',
          icon_url: this.client.user.avatarURL
        },
        color: this.client.color,
        footer: {
          text: 'COVID-19 Bot is sponsored by https://lunasrv.com/server'
        },
        fields: [
          {
            name: 'List of affected countries', value: 'It can be found [here](https://www.worldometers.info/coronavirus/#countries)'
          }
        ]
      }
    })
  }
}