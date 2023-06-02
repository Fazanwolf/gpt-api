import OaiInstance from "../utils/oaiInstance.js";
import models from "../utils/models.js";
import logger from "../utils/logger.util.js";

const LithoAssistant = async (req, res) => {
  const stoneName = req.body.stoneName;

  logger("LithoAssistant").info("LithoAssistant using " + models["chat/completions"]["gpt-3.5-turbo"] +
    " searching description for: " + stoneName);

  if (stoneName === undefined || stoneName === "") {
    logger("LithoAssistant").error("Bad request. Missing stoneName parameter.");
    return res.status(400).send("Bad request. Missing stoneName parameter.");
  }

  const response = await OaiInstance.createChatCompletion({
    model: models["chat/completions"]["gpt-3.5-turbo"],
    messages: [
      {
        role: "system",
        content: "You are an amazing lithotherapist that know the effect of every stone on the human body."
      },
      {
        role: "user",
        content: "Write me a short description (less than 100 words) about the " + stoneName + " stone."
      }
    ]
  });

  logger("LithoAssistant").info("Response: " + response.data.choices[0].message.content);


  return res.status(200).send(response.data.choices[0].message.content);
}

export default LithoAssistant;