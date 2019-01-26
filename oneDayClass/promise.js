const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('처리 결과');
    }
    else {
        reject('오류 메세지');
    }
})

promise.then(result => {
    console.log(result);

    return new Promise((resolve, reject) => {
    if(true) {
        resolve('2번 째처리 결과');
    }
    else {
        reject('오류 메세지');
    }
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error);
})