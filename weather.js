#!/usr/bin/node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const initCLI = () => {
    const userArgs = getArgs(process.argv)
    // console.log(userArgs);
    if (userArgs.h) {
        //Показать раздел помощь.
        printHelp();
    }
    if (userArgs.s) {
        // Сохранить название города для запроса к API.
    }
    if (userArgs.t) {
        // Сохранить пользовательский токен.
        saveKeyValue('token', userArgs.t);
    }
    // Показать погоду.
};

initCLI();