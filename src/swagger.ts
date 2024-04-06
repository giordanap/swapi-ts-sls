const swaggerJSDoc = require('swagger-jsdoc');

export const handler = async (event: any) => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'SWAPI',
        version: '1.0.0',
        description: 'API para obtener y agregar personaes a la lista',
      },
    },
    apis: ['./src/routes/*.ts'],
  };

  const swaggerSpec = swaggerJSDoc(options);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(swaggerSpec),
  };
};
