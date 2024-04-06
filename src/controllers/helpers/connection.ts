import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const Singleton = (function () {
  let instance: DocumentClient | null = null;

  return {
    getInstance: function (): DocumentClient {
      if (!instance) {
        instance = new DocumentClient();
      }

      return instance;
    },
  };
})();

export { Singleton };
