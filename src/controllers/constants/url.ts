import dotenv from "dotenv";

dotenv.config();

interface IConstants {
  URL: string;
}

const constants: IConstants = Object.freeze({
  URL: process.env.URL || "",
});

export { constants as URLConstants };
