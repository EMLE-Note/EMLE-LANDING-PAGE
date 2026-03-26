const fs = require('fs');
const content = fs.readFileSync('c:\\\\Users\\\\user\\\\.gemini\\\\antigravity\\\\mcp_config.json', 'utf8');
try {
    JSON.parse(content);
    console.log("VALID_JSON");
} catch (e) {
    console.log("ERROR parsing JSON:", e.message);
}
console.log("Lines 28-30 bytes:");
const lines = content.split('\n');
for (let i = 27; i < 30; i++) {
    console.log(`Line ${i + 1}:`, Buffer.from(lines[i]).toString('hex'));
}
