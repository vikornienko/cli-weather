#!/usr/bin/node
import { getArgs } from './helpers/args.js'

const initCLI = () => {
    const userArgs = getArgs(process.argv)
    console.log(userArgs);
    if (userArgs.h) {
        //Показать раздел помощь.
    }
    if (userArgs.s) {
        // Сохранить название города для запроса к API.
    }
    if (userArgs.t) {
        // Сохранить пользовательский токен.
    }
    // Показать погоду.
};

initCLI();