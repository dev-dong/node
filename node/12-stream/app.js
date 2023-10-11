const fs = require('fs');

// 💩, data를 한꺼번에 받아온다.
const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
    fs.writeFile('./file2.txt', data, () => {});
    // calculate
    const afterMem = process.memoryUsage.rss();
    const diff = afterMem - beforeMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`Consumed Memory: ${consumed}MB`);
});