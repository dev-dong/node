const fs = require('fs').promises; // fs 모듈에서 promises를 가져온다.

// read a file
fs.readFile('./text.txt', 'utf-8') // 파일을 읽는다.
    .then(data => console.log(data))
    .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! ') // 파일을 쓴다. void type 이므로 then을 사용하지 않는다.
    .catch(console.error);

// 비동기는 순차적으로 될 수도 있고 안될수도 있다. 순서를 보장하려면 then을 사용해야한다.
fs.appendFile('./file.txt', 'Yo!, Dream Coders! ') // 파일을 뒤에 추가한다.
    .then(() => {
        // copy
        // fs.copyFile('./file.txt', './file2.txt') // 파일을 복사한다.
        //     .catch(console.error);
    })
    .catch(console.error);

// copy
// 파일을 복사한다.
fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error);

// folder
// 폴더를 만든다.
fs.mkdir('sub-folder')
    .catch(console.error);

// 현재 디렉토리의 파일 목록을 가져온다.
fs.readdir('./')
    .then(console.log)
    .catch(console.error);
