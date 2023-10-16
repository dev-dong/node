const jwt = require('jsonwebtoken');

// payload는 토큰을 보낼 때 담고 싶은 데이터를 만들면 된다.
// 사용자에 대한 userId에 대한 정보를 담을 수 있고, admin 여부 등을 담을 수 있다.
// 정말 필수적인 데이터만 담자!
const secretkey = '\'sA~y{lC|+\'"QT-4oL4j@Vvn2kC<0=jF'
const token = jwt.sign({ // 토큰 생성
        id: 'dongho',
        isAdmin: false,
    },
    secretkey,
    {expiresIn: 2} // 2초 뒤에 토큰이 만료된다.
);

console.log(token);

setTimeout(() => {
    // 한번 발행된 토큰은 변경되면 안된다. 토큰 만료 시간을 정하지 않으면 영원히 지속되므로 만료시간을 설정해줘야한다.
    jwt.verify(token, secretkey, (error, decoded) => {
        console.log(error, decoded);
    }); // 토큰 검증
}, 3000);