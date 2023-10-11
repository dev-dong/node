const process = require('process'); // 프로세스 정보를 가져온다.

console.log(process.execPath); // 실행 경로
console.log(process.version); // 버전
console.log(process.pid); // 프로세스 아이디
console.log(process.ppid); // 부모 프로세스 아이디
console.log(process.platform); // 플랫폼 정보
console.log(process.env); // 환경 변수
console.log(process.uptime()); // 프로세스 실행된 시간
console.log(process.cwd()); // 현재 프로세스 경로
console.log(process.cpuUsage()); // cpu 사용량

// 현재코드가 다 수행되고, 0초 있다가 callback 함수를 수행해줘
setTimeout(() => {
    console.log('setTimeout');
}, 0);

// 현재 수행되고 있는 코드가 다 완료되고 나서 내가 등록한 callback 함수를 Task Queue에 넣어준다. Task Queue 우선순위가 제일 높다.
process.nextTick(() => {
    console.log('nextTick');
});

// 무거운 작업은 node에서 하는걸 지양한다.
for (let i = 0; i < 100; i++) {
    console.log('for loop');
}