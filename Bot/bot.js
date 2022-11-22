const { Telegraf } = require("telegraf");
const TOKEN = "5778708050:AAGo1_XTCnuE8n6H4f6RTWnpU_9LmlKzNJk";
const bot = new Telegraf(TOKEN);

const web_link = "https://nimble-gumdrop-90d9c6.netlify.app";

bot.start((ctx) =>
  ctx.reply("Привіт закупись :)", {
    reply_markup: {
      keyboard: [[{ text: "web app Сайт", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
