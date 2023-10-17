const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10); // 길이가 10개인 salt를 생성하여 암호화
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync('abcd1234', hashed); // 비밀번호가 일치하는지 확인
console.log(result);

const hashSync = bcrypt.hashSync('12345', 12);
console.log(hashSync);
