const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const files = [
    { 
        name: 'tiktokMrYmGFtSFSb0FMQcrgGYRdJnZDueUoXT.txt', 
        content: 'tiktok-developers-site-verification=MrYmGFtSFSb0FMQcrgGYRdJnZDueUoXT' 
    },
    { 
        name: 'tiktokW80hyQC60hi75H7MTNlTpbTyCipci1gZ.txt', 
        content: 'tiktok-developers-site-verification=W80hyQC60hi75H7MTNlTpbTyCipci1gZ' 
    },
    { 
        name: 'tiktokW80hyQC60hi75H7MTNITpbTyCipci1gZ.txt', 
        content: 'tiktok-developers-site-verification=W80hyQC60hi75H7MTNlTpbTyCipci1gZ' 
    }
];

files.forEach(file => {
    const filePath = path.join(publicDir, file.name);
    fs.writeFileSync(filePath, file.content, { encoding: 'utf8' });
    console.log('Created: ' + file.name);
});
