import OaiInstance from "../utils/oaiInstance.js";
import models from "../utils/models.js";
import logger from "../utils/logger.util.js";

const Suggest = async (req, res) => {
  const prompValue = req.body.prompt;

  const response = await OaiInstance.createCompletion({
    model: models.completions["text-davinci-003"],
    prompt: prompValue,
    max_tokens: 2048,

  });

  logger("Suggest").info("Suggesting on model " + models.completions["text-davinci-003"] + " with prompt:\n" + prompValue);

  return res.status(200).json(response.data);
}

export default Suggest;