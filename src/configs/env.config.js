import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GPT_API_KEY;

export {
  PORT as PORT,
  API_KEY as API_KEY
};