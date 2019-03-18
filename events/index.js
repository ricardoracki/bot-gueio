const Ready = require("./Ready");
const GuildMemberAdd = require("./GuildMemberAdd");
const Message = require("./Message");
const MessageReactionAdd = require("./MessageReactionAdd");
const MessageReactionRemove = require("./MessageReactionRemove");

module.exports = client => {
  client.on("ready", () => Ready.init(client));
  client.on("guildMemberAdd", member => GuildMemberAdd.welcome(member));
  client.on("message", msg => Message.ping(msg, client));
  client.on("messageReactionAdd", (reaction, user) =>
    MessageReactionAdd.enterChannel(reaction, user, client)
  );
  client.on("messageReactionRemove", (reaction, user) =>
    MessageReactionRemove.quitChannel(reaction, user)
  );

  client.on("messageUpdate", msg => {
    msg.reply("ACONTECEU!!!");
  });
};