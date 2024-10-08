import { homedir } from 'os';
import { join } from 'path';

const filePath = join(homedir(), "Appdir/data-cli-weather-app.json");

const saveKeyValue = (key, value) => {
    console.log();    
};

export { saveKeyValue };