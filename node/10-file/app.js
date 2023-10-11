const fs = require('fs'); // 파일시스템 가져오기

// 3 APIs
// rename(...., callback(error, data)) : 비동기, 필요한 인자를 전달한 다음 callback 함수를 호출
// try { renameSync(....) } catch(e) { } : 동기적으로 수행되므로 try ~ catch문으로 error를 잡는다., 필요한 인자를 전달한 다음 return
// promise.rename().then().catch(0)

try {
    // ./text.txt는 현재 디렉토리의 text.txt다 터미널로 node 실행 시 파일경로 확인해야함
    // 동기는 사용하지 않는것이 좋다.
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
});
console.log('hello');

fs.promises.rename('./text2.txt', './text2-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);