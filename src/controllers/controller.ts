import { Singleton } from "./helpers/connection";
import { DocumentClient, ScanOutput } from 'aws-sdk/clients/dynamodb';
import { Persona } from "./models/persona.class";

interface IController {
  insert(TableName: string, Item: Persona): Promise<void>;
  getAll(TableName: string): Promise<ScanOutput | Persona[]>;
}

export default class Controller implements IController{
  private readonly dynamodb: DocumentClient;

  public constructor() {
    this.dynamodb = Singleton.getInstance();
  }

  async insert(TableName: string, Item: Persona): Promise<void> {
    try {
      await this.dynamodb.put({
        TableName,
        Item,
      }).promise();
    } catch (error) {
      throw error;
    }
  }

  async getAll(TableName: string): Promise<ScanOutput | Persona[]> {
    try {
      return await this.dynamodb.scan({
        TableName,
      }).promise();
    } catch (error) {
      throw error;
    }
  }
}
