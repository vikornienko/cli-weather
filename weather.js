#!/usr/bin/node
import { getArgs } from './helpers/args.js';
import { getForecastInfo } from './services/api.service.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';


const saveToken = async (token) => {
    if (!token.length) {
        printError('Токен не передан! Укажите корректный токен.');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен был сохранен.');
        
    } catch (e) {
        printError(e.message);
    }
}

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
        return saveToken(userArgs.t);
    }
    getForecastInfo('yekaterinburg');
    // Показать погоду.
};

initCLI();