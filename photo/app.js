const path = require('path');
const os = require('os');
const fs = require('fs');
// const fsExtra = require('fs-extra'); // fs-extra는 fs 모듈의 기능을 보완한 모듈이다. fs-extra는 Promise를 지원한다.

// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다. process.argv
console.log(process.argv); // 사용자가 입력한 값을 배열로 받아온다. ex> nodemon app test
const folder = process.argv[2]; // 사용자가 입력한 폴더 이름을 받아온다.
const workingDir = path.join(os.homedir(), 'Pictures', folder); // 사용자의 home 디렉토리와 Pictures 폴더를 합쳐서 workingDir을 만든다.

// folder가 null이거나 workingDir이 존재하지 않으면
if (!folder) {
    console.error('Please enter folder name in Pictures');
    return;
} else if (!fs.existsSync(workingDir)) {
    fs.mkdirSync(workingDir, (error) => {
        console.error(error);
    });
}

// 2. 그 폴더안의 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');
makeDirectory(videoDir);
makeDirectory(capturedDir);
makeDirectory(duplicatedDir);

function makeDirectory(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, (error) => {
            console.error(error);
        });
    }
}

// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov는 video로, png|aae는 captured로, IMG_E로 시작하는 파일들은 duplicated로 이동시킨다.
fs.promises.readdir(workingDir)
    .then(files => processFiles(files))
    .catch(console.error);

function processFiles(files) {
    files.forEach(file => {
        const extname = path.extname(file);
        if (isVideoFile(file)) {
            move(file, videoDir);
        } else if (isCapturedFile(file)) {
            move(file, capturedDir);
        } else if (isDuplicatedFile(files, file)) {
            move(file, duplicatedDir);
        }
    });
}

function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm; // 정규표현식을 사용해서 mp4 또는 mov로 끝나는지 확인한다.
    const match = file.match(regExp);
    return !!match; // match가 null이면 false, match가 null이 아니면 true
}

function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    const match = file.match(regExp);
    return !!match;
}

function isDuplicatedFile(files, file) {
    // IMG_XXXX -> IMG_EXXX
    if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }

    const edited = `IMG_E${file.split('_')[1]}`;
    const found = files.find(data => data.includes(edited)); // edited가 포함된 파일이 있는지 확인한다.
    return !!found; // found가 null이면 false, found가 null이 아니면 true
}

function move(file, dir) {
    console.info(`move ${file} to ${path.basename(dir)}`); // path.basename(dir)은 dir의 마지막 폴더 이름을 가져온다.
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(dir, file);
    fs.promises.rename(oldPath, newPath)
        .catch(console.error);
}
