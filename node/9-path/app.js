// 파일시스템 접근, path
const path = require('path'); // 파일의 경로, 폴더의 경로를 쉽게 조작하도록 도와주는 모듈

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // 현재 파일의 경로
console.log(__filename); // 현재 파일의 경로 + 파일명

console.log(path.sep); // 경로의 구분자
console.log(path.delimiter); // 환경변수의 구분자

// basename
console.log(path.basename(__filename)); // 파일의 이름
console.log(path.basename(__filename, '.js')); // 파일의 이름 + 확장자제거

// dirname
console.log(path.dirname(__filename)); // 파일의 경로

// extension
console.log(path.extname(__filename)); // 파일의 확장자

// parse
const parsed = path.parse(__filename); // 파일의 경로를 분석
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // 절대경로
console.log('isAbsolute?', path.isAbsolute('../')); // 상대경로

// normalize
// 파일 경로 문자열을 정규화하기 위해 사용한다.
// '.' (현재 디렉토리) 세그먼트를 제거한다.
// '..' (상위 디렉토리) 세그먼트를 해석하여 적절한 위치로 경로를 이동시킨다.
// 연속된 여러 개의 슬래시를 단일 슬래시로 바꾼다.
console.log(path.normalize('./folder////sub'));

// join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image')); // 경로를 합쳐줌