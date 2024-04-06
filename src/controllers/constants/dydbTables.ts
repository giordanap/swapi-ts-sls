import dotenv from "dotenv";

dotenv.config();

interface IDynamoDBTables {
  TABLE: string;
}

const dynamoDBTables: IDynamoDBTables = Object.freeze({
  TABLE: process.env.TABLE || "",
});

export { dynamoDBTables as TABLE };
