const { Command } = require('../../structures/Command'); // Assume tera bot Command class use karta hai, agar nahi toh adjust kar (simple function bana)

module.exports = new Command({
    pattern: /^[\.\!]menu$/i, // Prefix . ya ! pe menu
    name: 'menu',
    description: 'Shows the bot menu with image',
    category: 'general',
    handler: async (context) => {
        const { from, reply, sock } = context; // Assume context mein yeh hain
        
        // Image URL
        const imageUrl = 'https://files.catbox.moe/306yfc.jpg';
        
        // Pehle image bhej
        const imageBuffer = await (await fetch(imageUrl)).buffer(); // URL se download kar buffer bana
        await sock.sendMessage(from, {
            image: imageBuffer,
            caption: 'Here is the menu image!'
        }, { quoted: context.msg });
        
        // Phir menu list text bhej
        const menuText = `
Welcome to NAYTIC-X Bot Menu!
Commands:
1. .alive - Get a shayari song
2. .help - More info
3. [Add your other commands here...]
        `;
        await reply(menuText);
    }
});
