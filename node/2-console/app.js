console.log('logging....');
console.clear(); // 로그 삭제

// log level
// 서버에 배포 했을 때 정말 중요한 warning, error 같은 경우 로그파일을 남기거나, 로그를 남기는 서비스 이용
console.log('log'); // 개발
console.info('info'); // 중요한 정보
console.warn('warn'); // 발생하면 안되지만, 치명적이지 않은 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert, 특정한 조건일 때 로그를 출력하고 싶을 때 사용
console.assert(2 === 3, 'not same!'); // 에러가 발생하면 메세지 출력
console.assert(2 === 2, 'same!'); // 에러가 발생하지 않으면 메세지 출력 안함

// print object
const student = {name: 'ellie', age: 20, company: {name: 'AC'}};
console.log(student);
console.table(student); // 테이블 형식으로 출력
console.dir(student, {showHidden: true, colors: false, depth: 0}); // 객체 형식으로 출력, 중첩된 객체를 어디까지 보여줄지 결정할 수 있다.

// measuring time, 시간 측정
console.time('for loop'); // for loop이 얼마나 걸리는지 측정
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop'); // for loop이 얼마나 걸리는지 측정

// counting, 특정한 것이 몇 번 호출되었는지 확인
function a() {
    console.count('a function');
}

a();
console.countReset('a function'); // count를 초기화
a();

// trace, 어디서 호출되었는지 알 수 있다.
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log('f3');
    console.trace(); // 어디서 호출되었는지 알 수 있다.
}

f1();