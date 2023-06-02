import OaiInstance from "../utils/oaiInstance.js";
import models from "../utils/models.js";
import logger from "../utils/logger.util.js";

const types = (stoneName) => {
  return {
    "description": "Give me a description of the stone " + stoneName + ".",
    "chakra": "Which chakra is affected by the stone " + stoneName + "?",
    "zodiac": "Give me the list of zodiac signs that the stone " + stoneName + "can affect.",
  }
}

const LithoAssistant = async (req, res) => {
  let nbWords = req.body.nbWords;
  const prompt = req.body.prompt;
  let outputWanted = "";

  if (prompt === undefined || prompt === "") {
    logger("LithoAssistant").error("Bad request. Missing prompt parameter.");
    return res.status(400).send("Bad request. Missing prompt parameter.");
  }
  logger("LithoAssistant").info("LithoAssistant using " + models["chat/completions"]["gpt-3.5-turbo"] +  "\n" + prompt);

  if (nbWords !== undefined || nbWords !== "0") {
    outputWanted += "The output will be limited to " + nbWords + " words. ";
  }

  outputWanted += prompt;

  const response = await OaiInstance.createChatCompletion({
    model: models["chat/completions"]["gpt-3.5-turbo"],
    messages: [
      {
        role: "system",
        content: "You are an amazing lithotherapist that know the effect of every stone on the human body."
      },
      {
        role: "user",
        content: outputWanted
      }
    ]
  });
  logger("LithoAssistant").info("Response: " + response.data.choices[0].message.content);
  return res.status(200).json({
    output: response.data.choices[0].message.content
  });
}

export default LithoAssistant;