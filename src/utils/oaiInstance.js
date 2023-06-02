import { Configuration, OpenAIApi } from "openai";
import { API_KEY } from "../configs/env.config.js";

const configuration = new Configuration({
  apiKey: API_KEY,
});

const OaiInstance = new OpenAIApi(configuration);

export default OaiInstance;