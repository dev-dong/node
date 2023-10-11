// Fixed-size chunk of memory (고정된 사이즈의 메모리 덩어리)
// Buffer는 array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf); // <Buffer 48 69>
console.log(buf.length); // 2
console.log(buf[0]); // Ascii code, 72
console.log(buf[1]); // Ascii code, 105
// toString()은 인코딩을 option으로 줄 수 있다. 기본값은 utf-8
console.log(buf.toString()); // Hi

// create
const buf2 = Buffer.alloc(2); // 2byte인 버퍼를 생성
const buf3 = Buffer.allocUnsafe(2); // 2byte인 버퍼를 생성, 공간을 확보하지만 초기화하지 않음
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3); // buf2의 내용을 buf3에 복사
console.log(buf2);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());