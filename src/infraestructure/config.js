import * as dotenv from "dotenv";
dotenv.config();

export default {
  backend: {
    serverPort: process.env.SERVER_PORT,
  },
  api: {
    weatherKey: process.env.ACCESS_KEY_WEATHER_API,
    unsplashKey: process.env.ACCESS_KEY_UNSPLASH_API,
    chatGptKey: process.env.ACCESS_KEY_CHAT_GPT_API,
  },
};
