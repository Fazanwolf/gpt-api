import { API_KEY, PORT} from './configs/env.config.js';
import logger from './utils/logger.util.js';

import express from 'express';
import Suggest from "./services/Suggest.js";
import LithoAssistant from "./services/litho-assistant.js";

const app = express();

app.use(express.json());

// app.post('/suggest', Suggest);
// app.post('/litho-assistant', LithoAssistant);

app.listen(process.env.PORT, () => {
  logger('index').info('Server is running on port ' + PORT);
});