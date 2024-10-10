import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const getForecastInfo = async (city) => {
  try {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
      throw new Error("Не указан ключ.");
    }

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: token,
          lang: "ru",
          units: "metric",
        },
      }
    );
    console.log('Token: ', token);
    console.log('Response: ', response)
    console.log('Data: ', response.data);
    process.exit(0);
  } catch (error) {
    console.error("Ошибка получения данных:", error.message);
    process.exit(1);
  } finally {
    process.exit();
  }
};

export { getForecastInfo };