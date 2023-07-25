#!/usr/bin/env node

const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('current', {
        type: 'boolean',
        alias: 'current'
    })
    .option('add', {
        type: 'boolean',
        alias: 'current'
    })
    .option('sub', {
        type: 'boolean',
        alias: 'current'
    })
    .option('--year', {
        type: 'boolean',
        alias: '-y'
    })
    .option('--month', {
        type: 'boolean',
        alias: '-m'
    })
    .option('--date', {
        type: 'boolean',
        alias: '-d'
    })
    .argv;

const date = new Date();

if (argv._.includes('current')) {
    if (argv['-y']) {
        console.log(date.getFullYear())
    } else if (argv['-m']) {
        console.log(date.getMonth())
    } else if (argv['-d']) {
        console.log(date.getDate())
    } else {
        console.log(date.toISOString())
    }
} else if (argv._.includes('add')) {
    const step = argv._[1] ?? 0;

    if (argv['-y']) {
        date.setFullYear(date.getFullYear() + step)
        console.log(date.getFullYear())
    } else if (argv['-m']) {
        date.setMonth(date.getMonth() + step)
        console.log(date.getMonth())
    } else if (argv['-d']) {
        date.setDate(date.getDate() + step)
        console.log(date.getDate())
    }

} else if (argv._.includes('sub')) {
    const step = argv._[1] ?? 0;

    if (argv['-y']) {
        date.setFullYear(date.getFullYear() - step)
        console.log(date.getFullYear())
    } else if (argv['-m']) {
        date.setMonth(date.getMonth() - step)
        console.log(date.getMonth())
    } else if (argv['-d']) {
        date.setDate(date.getDate() - step)
        console.log(date.getDate())
    }
}
