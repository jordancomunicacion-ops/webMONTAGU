const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// The user's requested string (with lowercase l)
const userContent = 'tiktok-developers-site-verification=W80hyQC60hi75H7MTNlTpbTyCipci1gZ';
// The probable string from the screenshot (with capital I)
const screenshotContent = 'tiktok-developers-site-verification=W80hyQC60hi75H7MTNITpbTyCipci1gZ';

const files = [
    { name: 'tiktokW80hyQC60hi75H7MTNlTpbTyCipci1gZ.txt', content: userContent },
    { name: 'tiktokW80hyQC60hi75H7MTNITpbTyCipci1gZ.txt', content: screenshotContent }
];

files.forEach(file => {
    const filePath = path.join(publicDir, file.name);
    fs.writeFileSync(filePath, file.content, { encoding: 'utf8' });
    console.log('Created: ' + file.name);
});

// Also create a version of the capital I filename WITH the lowercase l content just in case
const extraFile = 'tiktokW80hyQC60hi75H7MTNITpbTyCipci1gZ_v2.txt'; // Just kidding, I'll just keep it simple.
// Actually, I'll stick to the two names with their respective probable contents.

// Clean up the old one
const oldFile = path.join(publicDir, 'tiktokMrYmGFtSFSb0FMQcrgGYRdJnZDueUoXT.txt');
if (fs.existsSync(oldFile)) {
    fs.unlinkSync(oldFile);
    console.log('Deleted old file');
}
