function* numbers() {
    console.log('시작');
    yield 1;
    yield 2;
    yield 3;

    return 4;
}

let n = numbers();
console.log('n', n);

console.log('1', n.next());
console.log('2', n.next());
console.log('3', n.next());
console.log('4', n.next());