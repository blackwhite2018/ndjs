#!/usr/bin/env node

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;

const magicNumber = Math.round(Math.random() * 100);

console.log(`Загадано число в диапазоне от ${DEFAULT_MIN} до ${DEFAULT_MAX}`)

readline.on('line', num => {
    num = parseInt(num);

    if (num === magicNumber) {
        console.log(`Отгадано число ${magicNumber}`);

        readline.close();
    } else if (num > magicNumber) {
        console.log('Меньше');
    } else {
        console.log('Больше');
    }
});
