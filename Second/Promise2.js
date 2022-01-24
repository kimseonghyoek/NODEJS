const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음
promise
.then((message) => {
    return new Promise((resolve, reject) => {
        resolve(message);
    })
})
.then((message2) => {
    return new Promise((resolve, reject) => {
        resolve(message2);
    })
})
.then((message3) => {
    console(message3);
})
.catch((error) => {
    console.log('error');
})
.finally(() => {
    console.log('무조건');
})