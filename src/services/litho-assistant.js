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
  const stoneName = req.body.stoneName;
  let nbWords = req.body.nbWords;

  logger("LithoAssistant").info("LithoAssistant using " + models["chat/completions"]["gpt-3.5-turbo"] +
    " searching description for: " + stoneName);

  let outputWanted = "";

  if (stoneName === undefined || stoneName === "") {
    logger("LithoAssistant").error("Bad request. Missing stoneName parameter.");
    return res.status(400).send("Bad request. Missing stoneName parameter.");
  }

  if (nbWords === undefined || nbWords === "") {
    nbWords = 100;
  }

  outputWanted += "The output will be limited to " + nbWords + " words. ";

  if (req.body.type === undefined || req.body.type === "") {
    logger("LithoAssistant").error("Bad request. Missing type parameter.");
    return res.status(400).send("Bad request. Missing type parameter.");
  }

  outputWanted += types(stoneName)[req.body.type];

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