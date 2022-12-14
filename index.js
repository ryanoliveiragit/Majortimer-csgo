require('dotenv').config();
const { MessageEmbed, Activity } = require('discord.js');
const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

client.on('ready', () => {
    setInterval(() => {
        const newYers = "10 november 2022"
        const newYearsDate = new Date(newYers);
        const currentDate = new Date();
        const totalSeconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const data = (`${days} dias, ${hours} horas e ${mins} minutos`)
        client.user.setPresence({
            activities: [{
                name: data,
                type: 'PLAYING'
            }],
            status: 'online'
        });
    }, 1 * 60 * 1000);
    console.log('Discord presence atualizado!')
})

client.on('ready', () => {
    setInterval(() => {
        const newYers = "10 november 2022"
        const newYearsDate = new Date(newYers);
        const currentDate = new Date();
        const totalSeconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const data = (`${days} dias, ${hours} horas e ${mins} minutos`)
        let chanel = client.channels.cache.get("961357693405265960")
        const msgembed = new MessageEmbed()
            .setColor('#39D6AB')
            .setTitle('#IEM Major Rio 2022')
            .setDescription(`Faltam: ${data}`)
            .setImage('https://www.esports.net/br/wp-content/uploads/sites/3/2022/05/Novo-Projeto.jpg')
            .setTimestamp()
            chanel.send({ content: `@everyone`, embeds: [msgembed] }).then(msg => setTimeout(() => msg.delete(), 100000));
            chanel.messages.delete('1015634901866905662', { timeout: 10000 });
    }, 86400000);
    console.log('Servidor Atualizado!')
})

client.on('messageCreate', (message) => {
        const newYers = "10 november 2022"
        const newYearsDate = new Date(newYers);
        const currentDate = new Date();
        const totalSeconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const data = (`${days} dias, ${hours} horas e ${mins} minutos`)
    if (message.author.bot) return;

    if (message.content === '!major') {
        const msgembed = new MessageEmbed()
            .setColor('#39D6AB')
            .setTitle('#IEM Major Rio 2022')
            .setDescription(`Faltam: ${data}`)
            .setImage('https://www.esports.net/br/wp-content/uploads/sites/3/2022/05/Novo-Projeto.jpg')
            .setTimestamp()
        message.channel.send({ embeds: [msgembed] }).then(msg => setTimeout(() => msg.delete(), 10000));
        setTimeout(() => message.delete(), 10000);
    }
});

client.login(process.env.token)