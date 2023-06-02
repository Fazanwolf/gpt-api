import { format, createLogger, transports } from "winston";

const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ message, label, timestamp }) => {
  return `${timestamp} [${label}]: ${message}`;
});

const logger = (category) => {
  return createLogger({
    level: "debug",
    format: combine(label({label: category}), timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), customFormat),
    transports: [new transports.Console()],
  });
}

export default logger;