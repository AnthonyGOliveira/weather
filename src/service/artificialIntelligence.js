import config from "../infraestructure/config.js";
import axios from "axios";

async function getPlacesToVisitInCity(city) {
  const url = `https://api.openai.com/v1/chat/completions`;
  const quastion = `O que fazer em ${city}`;
  return await axios({
    method: "post",
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${config.api.chatGptKey}`,
    },
    data: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: quastion,
        },
      ],
      temperature: 0.7,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
}

export default {
    getPlacesToVisitInCity
}