const Discord = require("discord.js"); //baixa a lib
const client = new Discord.Client();
const config = require("./config.json");
const toapng = require('gif-to-apng');
const download = require('download-file');
const  read  = require("jimp");
'user strict';


client.on("ready", () => {
    
    console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity('Meu criador é um gostoso', { type: 'PLAYING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores.`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});
  
client.on("message", async message => {


    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    
    

      
    

    
    const today = new Date();
    const s = today.getUTCMilliseconds();
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
   

    // comando ping

    if (comando === "ping"){
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Vou lhe dizer a latência: ${m.createdTimestamp - message.createdTimestamp}ms. A latência da API é ${Math.round(client.ping)}ms`);
        console.log('Ping executado')


    }


    if (comando === "apng"){

        let [nome,emojilink] = args
        let info = {filename:"emoji.gif"}
        if(!args[0]) return message.reply("Você esqueceu de adicionar os argumentos \n !apng <nome> <link>")
        if(!args[1]) return message.reply("Você esqueceu de adicionar os argumentos \n !apng <nome> <link>")


        download(emojilink,info,function(err){
            if (!err)  {
                console.log("gif identificado")
                toapng('emoji.gif')
               .then(() => {
                message.guild.emojis.create('emoji.png', nome)
                 message.channel.send("O gif-emoji foi convertido para o modo NITRO-Pobre é adicionado!!!")
                })
               .catch(error => console.log('não consegui converter a imagem💀', error))
            }
            else
            {
                 message.channel.send("Link Inválido")
            }

        })

    }

    if(comando === "oi"){
        await message.channel.send("Olá!");
        console.log("Saudação realizada");


    }

    if(comando === "beleza?"){
        await message.channel.send("Tudo sim, e com você?");
        console.log("Conversa");
    }

    if(comando === "donofeio"){
        await message.reply("Você que é, sua ridícula!");
        console.log("Conversa");
    }

    if (comando === "soucorno?"){

        if (s > 500){
            await message.reply("Sim");
            console.log("Ele é corno");

        }

        else{
            await message.reply("Não");
            console.log("Ele não é corno");
        }

        
    }

    if (comando === "soubonito?"){

        if (s > 500){
            await message.reply("Sim");
            console.log("Ele é bonito");

        }

        else{
            await message.reply("Não");
            console.log("Ele não é bonito");
        }

        
    }

    if (comando === "carolvainamorar?"){
        console.log("Comando da carol executado");
        if (s > 500){
            await message.reply("Sim");
            console.log("Ela vai namorar")

        }
        else{
            await message.reply("Não");
            console.log("Não vai namorar");
        }
    }

    if (comando === "caroltop"){
        console.log("Eca");

        await message.reply("Nojenta pra caraca. Mesmo não tendo sentimentos, eu como robô, consigo sentir um nojo absurdo dessa vaca gorda prenha piranha.");

    }


    if (comando === "soubonita?"){

        if (s > 500){
            await message.reply("Sim");
            console.log("Ela é bonita");

        }

        else{
            await message.reply("Não");
            console.log("Ela não é bonita");
        }

        
    }

    if (comando === "almir"){

        await message.reply("Um grande viadão! Inclusive me deu a bunda ontem. Fico impressionado com a capacidade dele de ser viado");
    }

    if (comando === "vounamorar?") {

        if (s > 500){
            await message.reply("Sim");
            console.log("Ela é bonita");

        }

        else{
            await message.reply("Não");
            console.log("Ela não é bonita");
        }

    } 

    if (comando === "ysadora"){

        await message.channel.send("Boba demais! Cair na mão que é bom ela não cai. :larina:");
        console.log("Ysa");
    }

    if (comando === "avatar"){

            message.reply(message.author.displayAvatarURL());
            
            
            console.log("Avatar executado");
        
    }

    if (comando === "soucorna?"){

        if (s > 500){
            await message.reply("Sim");
            console.log("Ele é corno");

        }

        else{
            await message.reply("Não");
            console.log("Ele não é corno");
        }

        
    }

    if (comando === "nivelbelezadacarol"){
        await message.reply("100%");

        
    }

    if (comando === "gayzometro"){
        
    }

    if (comando === "crushmeama?") {
        console.log("Crush me ama?")

        if (s > 500){
            await message.reply("Sim");
            console.log("Crush s");

        }

        else{
            await message.reply("Não");
            console.log("Crush n");
        }

    } 

    if (comando === "meama?") {
        console.log("Me ama?")

        if (s > 500){
            await message.reply("Sim");
            console.log("ama");

        }

        else{
            await message.reply("Não");
            console.log("n ama");
        }

    } 

    if (comando === "bot"){

        await message.reply("A seu dispor! Diga o que queres!");
    }
    
    if (comando === "servericon"){

        message.reply(message.guild.iconURL());
        
        
        console.log("Avatar executado");
    
    }

    if (comando ==="ysa"){
        await message.reply("Babaca.");
    }

    if(comando ==="serounaoser"){
        await message.reply("Eis a questão.");
    }

    if (comando === "ysabonita?"){
        await message.reply("Não! Eu menti ali em cima...");
    }
    
    if (comando === "erica"){
        await message.reply("Uiui, gatinha. Aqueceu meu coração de robô.")
    }

   
    
    

});


  

client.login(config.token);